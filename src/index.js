import menuCards from './menu.json';
import createMarkup from './cardTemplate.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuMarkup: document.querySelector('.js-menu'),
  switcher: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};

refs.menuMarkup.innerHTML = createMarkup(menuCards);
themeDownload();
refs.switcher.addEventListener('change', toggleTheme);

// defaultTheme();

function toggleTheme(event) {
  if (event.target.checked) {
    themeDark();
  } else {
    themeLight();
  }
}

function themeLight() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}
function themeDark() {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}
function themeDownload() {
  const themeStatus = localStorage.getItem('theme');

  if (themeStatus) {
    if (localStorage.getItem('theme') === Theme.DARK) {
      refs.body.classList.add(Theme.DARK);
      refs.switcher.checked = true;
    }
    if (localStorage.getItem('theme') === Theme.LIGHT) {
      refs.body.classList.add(Theme.LIGHT);
      refs.switcher.checked = false;
    }
  }
}
