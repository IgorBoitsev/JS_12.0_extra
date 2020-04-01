'use strict';

// -------------------------------------
// №1
let arr = [
            '24568',
            '45687963',
            '1539',
            '4865196',
            '468435',
            '861651',
            '321684'
          ];

let startWithTwoOrFour = function(array) {
  let arraySeparate = [];
  for (let i = 0; i < array.length; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4)
      arraySeparate.push(arr[i]);
  }
  return arraySeparate;
}

console.log(startWithTwoOrFour(arr));

// -------------------------------------
// №2
let primeNumbers = function(n) {
  
}