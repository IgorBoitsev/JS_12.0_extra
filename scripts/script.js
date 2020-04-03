'use strict';

let week  = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
          ];

let getCurrentDay = function() {
  let day = new Date();
  return day.getDay();
}

let currentDay = getCurrentDay();
console.log(currentDay);
console.log(week);

for (let key in week) {

  if ((week[key] == 'Суббота') || (week[key] == 'Воскресенье')) {
    if (key == currentDay) {
      document.write('<h2><i><b>' + week[key] + '</b></i></h2>');
    } else {
        document.write('<p><i>' + week[key] + '</i></p>');
      }
  } else if (key == currentDay) {
      document.write('<h2><b>' + week[key] + '</b></h2>');
    } else {
        document.write('<p>' + week[key] + '</p>');
      }
}



