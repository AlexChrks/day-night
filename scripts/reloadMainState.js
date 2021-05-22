export default function reloadMainState(storage, signInForm, welcomeBlock, signOutButton) {
  if (storage.getItem('userName')) {
    signInForm.classList.add('non-displayed');
    welcomeBlock.classList.remove('non-displayed');
    welcomeBlock.innerText = `Welcome, ${storage.getItem('userName')}!`
    signOutButton.classList.remove('non-visible');
  } else {
    signInForm.classList.remove('non-displayed');
    welcomeBlock.classList.add('non-displayed');
    signOutButton.classList.add('non-visible');
  }
}