import toggleTheme from './toogleTheme.js'


export default function initTheme(themedEl, storage, toggler) {
  if (storage.getItem('theme')) {
    themedEl.classList.add(storage.getItem('theme'));
    toggler.setAttribute('checked', true);
  }
  
  toggler.addEventListener('click', () => {
    toggleTheme(storage, themedEl);
  });
}