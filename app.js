// Optyk Piotrkowska, version B: navigation only.

const WIDE_MIN_PX = 1081; // above the 1080px breakpoint the desktop nav shows

// 1. Desktop dropdowns: one open at a time; close on outside click and Escape.
function initDropdowns() {
  const triggers = [...document.querySelectorAll('.nav__trigger')];
  const close = (except) => {
    triggers.forEach((t) => {
      if (t === except) {
        return;
      }
      t.setAttribute('aria-expanded', 'false');
      document.getElementById(t.getAttribute('aria-controls')).hidden = true;
    });
  };

  triggers.forEach((t) => {
    t.addEventListener('click', () => {
      const open = t.getAttribute('aria-expanded') === 'true';
      close(t);
      t.setAttribute('aria-expanded', String(!open));
      document.getElementById(t.getAttribute('aria-controls')).hidden = open;
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__group')) {
      close();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close();
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

initDropdowns();
initMenu();
