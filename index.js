const {hash} = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h1').innerHTML = message; 
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  //avoid default
  event.preventDefault(); 
  //get the text
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const inputMessage = document.querySelector('#message-input');
  const messageToHide = btoa(inputMessage.value);

  const hiddenCode = document.querySelector('#link-input');
  hiddenCode.value = `${window.location}#${messageToHide}`;
  hiddenCode.select();
});