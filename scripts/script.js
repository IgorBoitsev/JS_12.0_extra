'use strict';

let lang = ''
let dateDay;
let dateMonth = '';
let dateYear;
let dateYearCode;
let dateMonthCode;
let dateDayCode;
let today;
let dateArr = { 'ru': ['суббота', 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница'],
                'en': ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday']
              };

//alert('Сейчас я вам скажу день недели по введенной дате! P.S. Действует для 2020 года.');

// Проверка выбора языка из двух вариантов
lang = prompt('Введите язык (\'ru\' или \'en\')').toLowerCase();

// №1. ВЫВОД ДНЯ НЕДЕЛИ ПО ВВЕДЕННОЙ ДАТЕ
// Если язык выбран русский
if (lang == 'ru') {
  // Введение необходимых данных для расчета дня недели
  dateYear = +prompt('Введите сегодняшний год: ');
  dateMonth = prompt('Введите месяц: ').toLowerCase();
  dateYearCode = (6 + dateYear - 2000 + (dateYear - 2000)/4) % 7;
  dateDay = +prompt('Введите число: ');

  // Определение кода месяца по его названию
  switch (dateMonth) {
    case 'январь': dateMonthCode = 1;
    break;
    case 'февраль': dateMonthCode = 4;
    break;
    case 'март': dateMonthCode = 4;
    break;
    case 'апрель': dateMonthCode = 4;
    break;
    case 'май': dateMonthCode = 2;
    break;
    case 'июнь': dateMonthCode = 5;
    break;
    case 'июль': dateMonthCode = 0;
    break;
    case 'август': dateMonthCode = 3;
    break;
    case 'сентябрь': dateMonthCode = 6;
    break;
    case 'октябрь': dateMonthCode = 1;
    break;
    case 'ноябрь': dateMonthCode = 4;
    break;
    case 'декабрь': dateMonthCode = 6;
    break;
  }

  // Определение кода дня недели
  if (dateMonth == 'январь' || dateMonth == 'февраль') {
    dateResult = (dateYearCode + dateMonthCode + dateDay) % 7 - 1;
  } else if (dateMonth == 'апрель') {
    dateResult = (dateYearCode + dateMonthCode + dateDay) % 7 + 3;
    } else {
      dateResult = (dateYearCode + dateMonthCode + dateDay) % 7;
      }

  switch (dateResult) {
    case 0: today = 'суббота';
    break;
    case 1: today = 'воскресенье';
    break;
    case 2: today = 'понедельник';
    break;
    case 3: today = 'вторник';
    break;
    case 4: today = 'среда';
    break;
    case 5: today = 'четверг';
    break;
    case 6: today = 'пятница';
    break;
  }

  // Вывод дня недели через if
  /*
  if (today == 'понедельник') alert('Этот день - ' + today + '!');
  if (today == 'вторник') alert('Этот день - ' + today + '!');
  if (today == 'среда') alert('Этот день - ' + today + '!');
  if (today == 'четверг') alert('Этот день - ' + today + '!');
  if (today == 'пятница') alert('Этот день - ' + today + '!');
  if (today == 'суббота') alert('Этот день - ' + today + '!');
  if (today == 'воскресенье') alert('Этот день - ' + today + '!');
  */

  // Вывод дня недели через swith-case
  /*
  switch (today) {
    case 'понедельник': alert('Этот день - ' + today + '!');
    break;
    case 'вторник': alert('Этот день - ' + today + '!');
    break;
    case 'среда': alert('Этот день - ' + today + '!');
    break;
    case 'четверг': alert('Этот день - ' + today + '!');
    break;
    case 'пятница': alert('Этот день - ' + today + '!');
    break;
    case 'суббота': alert('Этот день - ' + today + '!');
    break;
    case 'воскресенье': alert('Этот день - ' + today + '!');
    break;
  }
  */

  // Вывод дня недели через многомерный массив
  alert('Этот день - ' + dateArr[lang][dateResult] + '!');
}



// Если язык выбран английский
/*
if (lang == 'en') {
  // Введение необходимых данных для расчета дня недели
  dateYear = +prompt('Enter the year: ');
  dateMonth = prompt('Enter the month: ').toLowerCase();
  dateYearCode = (6 + dateYear - 2000 + (dateYear - 2000)/4) % 7;
  dateDay = +prompt('Enter the day of the month: ');

  // Определение кода месяца по его названию
  switch (dateMonth) {
    case 'january': dateMonthCode = 1;
    break;
    case 'february': dateMonthCode = 4;
    break;
    case 'march': dateMonthCode = 4;
    break;
    case 'april': dateMonthCode = 4;
    break;
    case 'may': dateMonthCode = 2;
    break;
    case 'june': dateMonthCode = 5;
    break;
    case 'july': dateMonthCode = 0;
    break;
    case 'august': dateMonthCode = 3;
    break;
    case 'september': dateMonthCode = 6;
    break;
    case 'october': dateMonthCode = 1;
    break;
    case 'november': dateMonthCode = 4;
    break;
    case 'december': dateMonthCode = 6;
    break;
  }

  // Определение кода дня недели
  if (dateMonth == 'january' || dateMonth == 'february') {
    dateResult = (dateYearCode + dateMonthCode + dateDay) % 7 - 1;
  } else if (dateMonth == 'april') {
    dateResult = (dateYearCode + dateMonthCode + dateDay) % 7 + 3;
    } else {
      dateResult = (dateYearCode + dateMonthCode + dateDay) % 7;
      }

  switch (dateResult) {
    case 0: today = 'saturday';
    break;
    case 1: today = 'sunday';
    break;
    case 2: today = 'monday';
    break;
      case 3: today = 'tuesday';
    break;
    case 4: today = 'wednesday';
    break;
    case 5: today = 'thursday';
    break;
    case 6: today = 'friday';
    break;
  }

  // Вывод дня недели через if
  /*
  if (today == 'saturday') alert('Этот день - ' + today + '!');
  if (today == 'sunday') alert('Этот день - ' + today + '!');
  if (today == 'monday') alert('Этот день - ' + today + '!');
  if (today == 'tuesday') alert('Этот день - ' + today + '!');
  if (today == 'wednesday') alert('Этот день - ' + today + '!');
  if (today == 'thursday') alert('Этот день - ' + today + '!');
  if (today == 'friday') alert('Этот день - ' + today + '!');
  */

    // Вывод дня недели через swith-case
  /*
  switch (today) {
    case 'saturday': alert('It is ' + today + '!');
    break;
    case 'sunday': alert('It is ' + today + '!');
    break;
    case 'monday': alert('It is ' + today + '!');
    break;
    case 'tuesday': alert('It is ' + today + '!');
    break;
    case 'wednesday': alert('It is ' + today + '!');
    break;
    case 'thursday': alert('It is ' + today + '!');
    break;
    case 'friday': alert('It is ' + today + '!');
    break;
  }
  */

  // Вывод дня недели через многомерный массив
  /*
  alert('It is ' + dateArr[lang][dateResult] + '!');
}
*/

// №2 ВЫВОД СТАТУСА КОНКРЕТНОГО ЧЕЛОВЕКА
/*
let namePerson = prompt('Введите имя человека, должность которого хотите узнать.').toLowerCase();

(namePerson == 'артем' || namePerson == 'артём') ?
  console.log(namePerson[0].toUpperCase() + namePerson.slice(1) + ' - директор.') :
  (namePerson == 'максим') ? console.log(namePerson[0].toUpperCase() + namePerson.slice(1) + ' - преподаватель') :
    console.log(namePerson[0].toUpperCase() + namePerson.slice(1) + ' - студент.');
*/