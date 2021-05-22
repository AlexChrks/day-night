export default function toggleTheme(storage, themedElem) {
  if (storage.getItem('theme')) {
    themedElem.classList.remove(storage.getItem('theme'))
    storage.setItem('theme', '');
    return
  }
  storage.setItem('theme', 'dark');
  themedElem.classList.add(storage.getItem('theme'));
}