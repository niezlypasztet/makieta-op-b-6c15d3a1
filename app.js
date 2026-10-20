// Optyk Piotrkowska, version B: navigation and the floating phone.

const WIDE_MIN_PX = 1101;     // above the 1100px breakpoint the desktop nav shows

// 1. Desktop dropdowns: one open at a time; close on outside click, Escape,
//    choosing a link, focus leaving the menu, and switching to the narrow layout.
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

    const group = t.closest('.nav__group');
    group.addEventListener('focusout', (e) => {
      if (e.relatedTarget && !group.contains(e.relatedTarget)) {
        close();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.nav__panel a') || !e.target.closest('.nav__group')) {
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

  const wide = window.matchMedia(`(min-width: ${WIDE_MIN_PX}px)`);
  wide.addEventListener('change', () => {
    if (!wide.matches) {
      close();
    }
  });
}

// 2. Mobile menu: toggles; closes after choosing a link, on Escape (focus back
//    on the toggle), on a tap outside the header, or when the window widens.
function initMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu-mobile');
  if (!toggle || !menu) {
    return;
  }
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  };

  toggle.addEventListener('click', () => {
    const open = isOpen();
    toggle.setAttribute('aria-expanded', String(!open));
    menu.hidden = open;
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      close();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !isOpen()) {
      return;
    }
    close();
    toggle.focus();
  });
  document.addEventListener('click', (e) => {
    if (isOpen() && !e.target.closest('.top')) {
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

// 3. Floating phone: hidden only while another call button is on screen
//    (the hero's phone-only button or the visit card's), so the first
//    screen never shows two calls and never shows none.
function initFloatCall() {
  const call = document.querySelector('.float-call');
  const anchors = [...document.querySelectorAll('.hero__call .btn, .visit .btn')];
  if (!call || anchors.length === 0) {
    return;
  }
  const visible = new Set();
  const watch = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        visible.add(entry.target);
      } else {
        visible.delete(entry.target);
      }
    });
    call.classList.toggle('is-away', visible.size > 0);
  });
  anchors.forEach((a) => watch.observe(a));
}

initDropdowns();
initMenu();
initFloatCall();
