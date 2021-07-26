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

refs.switcher.addEventListener('change', changeTheme);

function changeTheme(event) {
  if (event.target.checked) {
    refs.body.classList.add('dark-theme');
  } else {
    refs.body.classList.remove('dark-theme');
  }
}
