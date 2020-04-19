'use strict';

function DomElement(selector, height, width, bg, text, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.text = text;
  this.fontSize = fontSize;
};

DomElement.prototype.createElement = function() {
  if (this.selector[0] == '.') {
    // Создание элементов
    let div = document.createElement('div');
    let str = document.createElement('span');
    // Добавление класса блоку
    div.classList.add(this.selector.substr(1));
    // Добавление стилей
    div.style.cssText =  'height: ' + this.height + 'px;' +
                          'width: ' + this.width + 'px;' +
                          'background: ' + this.bg + ';';
    str.style.cssText = 'font-size: ' + this.fontSize + 'px;';
    // Вставка текста в строку
    str.innerHTML = this.text;
    // Вставка строки в блок
    div.append(str);
    //Вставка блока в документ
    document.body.prepend(div);
  };

  if (this.selector[0] == '#') {
    // Создание элементов
    let p = document.createElement('p');
    let str = document.createElement('span');
    // Добавление id блоку 
    p.id = this.selector.substr(1);
    // Добавление стилей
    p.style.cssText =  'height: ' + this.height + 'px;' +
                          'width: ' + this.width + 'px;' +
                          'background: ' + this.bg + ';';
    str.style.cssText = 'font-size: ' + this.fontSize + 'px;';
    // Вставка текста в строку
    str.innerHTML = this.text;
    // Вставка строки в блок
    p.append(str);
    //Вставка блока в документ
    document.body.prepend(p);
  };
};

// ============================================================================
let newDomElement = new DomElement('.block', 100, 100, '#fff000', 'Привет?', 21);
let newDomElement2 = new DomElement('#best', 200, 150, '#000fff', 'Пока!', 22);
let newDomElement3 = new DomElement('#best', 140, 110, '#714ffd', 'Пока!', 20);

newDomElement.createElement();
newDomElement2.createElement();
newDomElement3.createElement();
// ============================================================================

// // Обнуление стилей в head для body
// document.body.style.cssText = 'display: block; justify-content: unset';

// let newDomElement = new DomElement('.square', 100, 100, '#ff00ff', 'Погнали!', 22);
// newDomElement.createElement();

// // // Добавление стилей блоку
// let square = document.querySelector('.square');
// square.style.cssText = square.getAttribute('style') + ' position: absolute; left: 0px; top: 0px';

// DomElement.prototype.eventsListeners = function() {
//   document.addEventListener('keydown', function(event) {
    
//     let div = document.querySelector('div'),
//         pxRight = +getComputedStyle(div).right.split('px')[0],
//         pxLeft = +getComputedStyle(div).left.split('px')[0],
//         pxUp = +getComputedStyle(div).top.split('px')[0],
//         pxDown = +getComputedStyle(div).bottom.split('px')[0];
    
//     if (event.key == 'ArrowRight' && pxRight > 0) {
//       let px = +getComputedStyle(div).left.split('px')[0] + 10;
//       div.style.left = px + 'px';
//     };

//     if (event.key == 'ArrowLeft' && pxLeft > 0) {
//       let px = +getComputedStyle(div).left.split('px')[0] - 10;
//       div.style.left = px + 'px';
//     };

//     if (event.key == 'ArrowUp' && pxUp > 0) {
//       let px = +getComputedStyle(div).top.split('px')[0] - 10;
//       div.style.top = px + 'px';
//     }

//     if (event.key == 'ArrowDown' && pxDown > 0) {
//       let px = +getComputedStyle(div).top.split('px')[0] + 10;
//       div.style.top = px + 'px';
//     }
//   });
// };

// document.addEventListener('DOMContentLoaded', newDomElement.eventsListeners());