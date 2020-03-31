let lang = ''
let dateDay;
let dateMonth = '';
let dateYear;
let dateYearCode;
let dateMonthCode;
let dateDayCode;
let today;

//alert('Сейчас я вам скажу день недели по введенной дате!');

// Проверка выбора языка из двух вариантов
lang = prompt('Введите язык (\'ru\' или \'en\')').toLowerCase();

/*if ((lang != 'ru') || (lang != 'en')) {
  alert('Вы неправильно ввели формат языка. Подумайте над своим поведением.')
  } else {

    }
  */

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
if (lang == 'ru') {
  if (today == 'понедельник') alert('Этот день - ' + today + '!');
  if (today == 'вторник') alert('Этот день - ' + today + '!');
  if (today == 'среда') alert('Этот день - ' + today + '!');
  if (today == 'четверг') alert('Этот день - ' + today + '!');
  if (today == 'пятница') alert('Этот день - ' + today + '!');
  if (today == 'суббота') alert('Этот день - ' + today + '!');
  if (today == 'воскресенье') alert('Этот день - ' + today + '!');
} else if (lang == 'en') {
  if (today == 'понедельник') alert('It is Monday!');
  if (today == 'вторник') alert('It is Tuesday!');
  if (today == 'среда') alert('It is Wednesday!');
  if (today == 'четверг') alert('It is Thursday!');
  if (today == 'пятница') alert('It is Frirday!');
  if (today == 'суббота') alert('It is Saturday!');
  if (today == 'воскресенье') alert('It is Sunday!');
}





