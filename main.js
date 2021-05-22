import formLogic from './scripts/formLogic.js';
import reloadMainState from './scripts/reloadMainState.js';
import initTheme from './scripts/initTheme.js'
import signOut from './scripts/signOut.js';


const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const main = document.querySelector('.main');

const form = document.querySelector('.sign-in-form');
const signInInput = document.querySelector('.input-name');
const btnSignIn = document.querySelector('.btn-sign-in');
const btnSignOut = document.querySelector('.sign-out-button');
const modeToggler = document.querySelector('.mode-toggle');

const welcomeBlock = document.querySelector('.welcome-block');

const storage = window.localStorage;


function app() {
  initTheme(wrapper, storage, modeToggler);
  reloadMainState(storage, form, welcomeBlock, btnSignOut);
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formLogic(storage, form);
    reloadMainState(storage, form, welcomeBlock, btnSignOut);
  });

  btnSignOut.addEventListener('click', (e) => {
    signOut(storage);
    reloadMainState(storage, form, welcomeBlock, btnSignOut);
  })
}

app();