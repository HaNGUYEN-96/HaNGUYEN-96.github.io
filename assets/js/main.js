const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (menu && nav) {
 const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
 menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
 nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
 document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
 window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}
const filters = document.querySelectorAll('[data-filter]');
const publications = document.querySelectorAll('[data-type]');
filters.forEach(button => button.addEventListener('click', () => {
 const filter = button.dataset.filter;
 filters.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
 let visible = 0;
 publications.forEach(item => { item.hidden = filter !== 'all' && item.dataset.type !== filter; if (!item.hidden) visible++; });
 document.querySelector('#filter-status').textContent = `${visible} scholarly work entries shown.`;
}));
if ('IntersectionObserver' in window && nav) {
 const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) nav.querySelectorAll('a').forEach(link => { if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); }); }, {rootMargin: '-15% 0px -60% 0px', threshold: 0});
 document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const printButton = document.querySelector('#print-cv');
if (printButton) printButton.addEventListener('click', () => window.print());
