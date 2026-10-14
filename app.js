'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 620px)');
function closeMenu() {
  navigation?.classList.remove('is-open');
  menu?.setAttribute('aria-expanded', 'false');
}
function updateMenu() {
  if (menu) menu.hidden = !mobile.matches;
  if (!mobile.matches) closeMenu();
}
updateMenu();
mobile.addEventListener('change', updateMenu);
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menu.focus();
  }
});
const studies = Array.from(document.querySelectorAll('.study'));
const studyLinks = Array.from(document.querySelectorAll('.study-sidebar nav a'));
function selectStudy(initial = false) {
  if (!studies.length) return;
  let hash;
  try { hash = decodeURIComponent(location.hash.slice(1)); } catch { hash = ''; }
  const chosen = studies.find(item => item.id === hash) || studies[0];
  studies.forEach(item => { item.hidden = item !== chosen; });
  studyLinks.forEach(link => {
    if (link.hash === '#' + chosen.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = chosen.dataset.title + ' | Jino Jose Architecture';
  if (!initial) {
    const heading = chosen.querySelector('h2');
    heading?.focus({preventScroll: true});
    chosen.scrollIntoView({behavior: 'instant', block: 'start'});
  }
}
selectStudy(true);
window.addEventListener('hashchange', () => selectStudy());
