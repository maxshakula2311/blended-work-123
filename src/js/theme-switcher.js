//theme-light //theme-dark
import localStorageApi from './local-storage-api';

export function handleChangeTheme() {
  if (document.body.classList.contains('theme-light')) {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
    localStorageApi.saveTheme('theme-dark');
  } else {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
    localStorageApi.saveTheme('theme-light');
  }
}

export function initTheme() {
  if (localStorageApi.getTheme() === 'theme-light') {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  } else {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  }
}
