const bodyRef = document.querySelector('body');
const themeControlRef = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const saveToStorage = value => {
  localStorage.setItem('theme', value);
};

const replaceTheme = (oldClass, newClass) => {
  bodyRef.classList.remove(oldClass);
  bodyRef.classList.add(newClass);
  saveToStorage(newClass);
};

const addTheme = () => {
  if (themeControlRef.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
};

const firstTheme = () => {
  let darkTheme = localStorage.getItem('theme') || Theme.LIGHT;
  themeControlRef.checked = Theme.DARK === darkTheme;
  return darkTheme;
};

bodyRef.classList.add(firstTheme());
themeControlRef.addEventListener('change', addTheme);
