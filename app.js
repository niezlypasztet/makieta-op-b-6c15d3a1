// Optyk Piotrkowska, version B: navigation and the service-row preview.

const WIDE_MIN_PX = 1101;     // above the 1100px breakpoint the desktop nav shows
const PEEK_OFFSET_PX = 24;    // gap between the pointer and the preview's corner
const PEEK_EASE = 0.2;        // fraction of the remaining distance per frame

// 1. Desktop dropdowns: one open at a time; close on outside click and Escape.
function initDropdowns() {
  const triggers = [...document.querySelectorAll('.nav__trigger')];
  const panel = (t) => document.getElementById(t.getAttribute('aria-controls'));
  const close = (except) => {
    triggers.forEach((t) => {
      if (t === except) {
        return;
      }
      t.setAttribute('aria-expanded', 'false');
      panel(t).hidden = true;
    });
  };

  triggers.forEach((t) => {
    t.addEventListener('click', () => {
      const open = t.getAttribute('aria-expanded') === 'true';
      close(t);
      t.setAttribute('aria-expanded', String(!open));
      panel(t).hidden = open;
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__group')) {
      close();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') {
      return;
    }
    const open = triggers.find((t) => t.getAttribute('aria-expanded') === 'true');
    close();
    if (open) {
      open.focus();
    }
  });
}

// 2. Mobile menu: toggles, closes after choosing a link or when the window widens.
function initMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu-mobile');
  if (!toggle || !menu) {
    return;
  }
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      close();
    }
  });

  const wide = window.matchMedia(`(min-width: ${WIDE_MIN_PX}px)`);
  wide.addEventListener('change', () => {
    if (wide.matches) {
      close();
    }
  });
}

// 3. Service table: on a fine pointer, each row shows its photo beside the
//    pointer and the preview trails it. It sits above the pointer so the
//    hovered row stays readable. Touch and reduced motion skip it.
function initPeek() {
  const table = document.querySelector('[data-peek-table]');
  const peek = document.querySelector('.peek');
  const fine = window.matchMedia('(pointer: fine)').matches;
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!table || !peek || !fine || still) {
    return;
  }
  const img = peek.querySelector('img');
  let pos = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  let running = false;

  const tick = () => {
    pos = { x: pos.x + (target.x - pos.x) * PEEK_EASE, y: pos.y + (target.y - pos.y) * PEEK_EASE };
    peek.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    if (Math.abs(target.x - pos.x) < 0.5 && Math.abs(target.y - pos.y) < 0.5) {
      running = false;
      return;
    }
    requestAnimationFrame(tick);
  };
  const follow = (e) => {
    target = { x: e.clientX + PEEK_OFFSET_PX, y: e.clientY - peek.offsetHeight - PEEK_OFFSET_PX };
    if (!running) {
      running = true;
      requestAnimationFrame(tick);
    }
  };

  table.querySelectorAll('[data-peek]').forEach((row) => {
    row.addEventListener('pointerenter', (e) => {
      img.src = row.dataset.peek;
      if (!peek.classList.contains('is-on')) {
        pos = { x: e.clientX + PEEK_OFFSET_PX, y: e.clientY - peek.offsetHeight - PEEK_OFFSET_PX };
      }
      peek.classList.add('is-on');
      follow(e);
    });
    row.addEventListener('pointermove', follow);
  });
  table.addEventListener('pointerleave', () => peek.classList.remove('is-on'));
}

// 4. Floating phone: hidden while the first screen is in view, since the
//    header and the visit card already show the number there.
function initFloatCall() {
  const call = document.querySelector('.float-call');
  const hero = document.querySelector('.hero');
  if (!call || !hero) {
    return;
  }
  const watch = new IntersectionObserver(([entry]) => {
    call.classList.toggle('is-away', entry.isIntersecting);
  });
  watch.observe(hero);
}

initDropdowns();
initMenu();
initPeek();
initFloatCall();
