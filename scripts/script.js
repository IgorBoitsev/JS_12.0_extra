'use strict';

let change = document.querySelector('#change');
let h1 = document.querySelector('h1');

let setRandomColor = function() {
  let colorStr = '0123456789ABCDEF';
  let bodyColor = '#';
  let textColor = '#';
  let buttonColor = '#';

  for (let i = 0; i < 6; i++) {
    bodyColor += colorStr[Math.floor(Math.random() * 16)];
    textColor += colorStr[Math.floor(Math.random() * 16)];
    buttonColor += colorStr[Math.floor(Math.random() * 16)];
  }
  
  h1.innerText = bodyColor;
  h1.style = 'color: ' + textColor;
  change.style = 'background-color: ' + buttonColor;
  document.body.style = 'background-color: ' + bodyColor;
}

change.addEventListener('click', setRandomColor);