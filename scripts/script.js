// №1
let num = 266219;
let str = String(num);     // Перевод числа в строку
let figuresOfNumer = [];
let comp = 1;

// №2
for (i=0; i < String(num).length; i++) {
  figuresOfNumer[i] = str[i];     // Задание массива, состоящего
  comp *= str[i];          // цифр заданного числа
}
//console.log(figuresOfNumer);
//console.log(comp);

// №3
let compInThirdPower = comp ** 3;
//console.log(compInThirdPower);

// №4
alert('Первые две цифры полученного вот того здоровенного числа: '
      + String(compInThirdPower)[0] + ' и '
      + String(compInThirdPower)[1]);