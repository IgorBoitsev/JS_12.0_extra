'use strict';

// -------------------------------------
// №1
let arr = [
            '24568',
            '45687963',
            '1539',
            '9865196',
            '368435',
            '861651',
            '421684'
          ];

let startWithTwoOrFour = function(array) {
  let arraySeparate = [];
  for (let i = 0; i < array.length; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4)
      arraySeparate.push(arr[i]);
  }
  return arraySeparate;
}
console.log('Первое задание\n------***------');
console.log(startWithTwoOrFour(arr));

// -------------------------------------
// №2
let primeNumbers = function(n) {
  
  for (let i = 2; i <= n; i++) {
    // Счетчик для подсчета делителей
    let divCount = 0;
    // В цикле проверяем, сколько делителей есть у числа
    for (let j = 2; j <= i; j++) {
      if (i % j == 0)
        divCount += 1; 
    }
    // Выводим число, если нацело получилось поделить только на само себя
    if (divCount == 1) console.log(i + '\nДелители числа: 1 и ' + i);
  }
}

console.log('Второе задание\n------***------');
primeNumbers(100);