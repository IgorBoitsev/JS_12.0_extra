'use strict';

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

let newDomElement = new DomElement('.block', 100, 100, '#fff000', 16);
console.log(newDomElement);
