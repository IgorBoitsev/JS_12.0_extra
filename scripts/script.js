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
    let section = document.querySelector('section');
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
    section.append(div);
  };

  if (this.selector[0] == '#') {
    // Создание элементов
    let section = document.querySelector('section');
    let div = document.createElement('div');
    let str = document.createElement('span');
    // Добавление id блоку 
    div.id = this.selector.substr(1);
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
    section.append(div);
  };
};

let newDomElement = new DomElement('.block', 100, 100, '#fff000', 'Привет?', 21);
let newDomElement2 = new DomElement('#best', 200, 150, '#000fff', 'Пока!', 22);
let newDomElement3 = new DomElement('#best', 140, 110, '#714ffd', 'Пока!', 20);

newDomElement.createElement();
newDomElement2.createElement();
newDomElement3.createElement();