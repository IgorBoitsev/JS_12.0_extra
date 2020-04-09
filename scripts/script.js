'use strict';

let seconds,
    minutes,
    hours,
    // dayOfWeek,
    // dayNumber,
    // monthNumber,
    week = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
          ],
    month = [
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря',
          ],
    year;
let currentDay = new Date();

let displayDate = function(d) {
  // Создание строки с датой
  let todaysDate = 'Сегодня ' + week[d.getDay()] + ', ' + d.getDate() +
  ' ' + month[d.getMonth()] + ' ' + d.getFullYear() + ' года, ';
  
  return todaysDate;
}

let displayTime = function(d) {
  let time = '',
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds();

  // Изменение окончания в зависимости от текущего часа
  if (h == 1 || h == 21) {
    time = h + ' час ';
  } else if ((h < 5 && h > 1) || h > 21) {
      time = h + ' часа ';
    } else {
        time = h + ' часов ';
      }

  // Изменение окончания в зависимости от текущих минут
  if (m == 1 ||
      m == 21 ||
      m == 31 ||
      m == 41 ||
      m == 51) {
    time = time + m +  ' минута ';
  } else if ( (m > 1 && m < 5) ||
              (m > 21 && m < 25) ||
              (m > 31 && m < 35) ||
              (m > 41 && m < 45) ||
              (m > 51 && m < 55)) {
      time = time + m +  ' минуты ';
    } else {
        time = time + m +  ' минут ';
      }

  // Изменение окончания в зависимости от текущих секунд
  if (s == 1 ||
      s == 21 ||
      s == 31 ||
      s == 41 ||
      s == 51) {
    time = time + s +  ' секунда ';
  } else if ( (s > 1 && s < 5) ||
              (s > 21 && s < 25) ||
              (s > 31 && s < 35) ||
              (s > 41 && s < 45) ||
              (s > 51 && s < 55)) {
      time = time + s +  ' секунды ';
    } else {
        time = time + s +  ' секунд ';
      }

  return time;
}

let displayDigitalDate = function(d) {
  let digitalDate = '';
  
  // Проверка номера дня месяца для простановки 0 впереди
  if (d.getDate() < 9) {
    digitalDate = digitalDate + '0' + d.getDate();
  }  else {
    digitalDate = digitalDate + d.getDate();
    }

  // Проверка номера месяца для простановки 0 впереди
  if (d.getMonth() < 8) {
    digitalDate = digitalDate + '.0' + (d.getMonth() + 1) + '.' + d.getFullYear();
  } else {
     digitalDate = digitalDate + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
    }

  // Проверка часов на наличие 0 впереди
  if (d.getHours() < 9) {
    digitalDate = digitalDate + ' - ' + '0' + d.getHours();
  } else {
      digitalDate = digitalDate + ' - ' + d.getHours();
    }

  // Проверка минут на наличие 0 впереди
  if (d.getMinutes() < 9) {
    digitalDate = digitalDate + ':0' + d.getMinutes();
  } else {
      digitalDate = digitalDate + ':' + d.getMinutes();
    }

  // Проверка минут на наличие 0 впереди
  if (d.getSeconds() < 9) {
    digitalDate = digitalDate + ':0' + d.getSeconds();
  } else {
      digitalDate = digitalDate + ':' + d.getSeconds();
    }    

  return digitalDate;
}



document.write(displayDate(currentDay) + displayTime(currentDay));
document.write('<br>');
document.write(displayDigitalDate(currentDay));

console.log(displayDate(currentDay) + displayTime(currentDay));
console.log(displayDigitalDate(currentDay));


setInterval(function(){
  let cd = new Date();
  console.log(displayDigitalDate(cd));
  console.log(cd);
}, 1000)