document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
          output = document.getElementById('output'),
          urlAddress = './scripts/cars.json';

    const successMessage = (elem) => console.log(elem);
    const errorMessage = (mes) => console.log(mes);

    const outputMessage = (url) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    data.cars.forEach(item => {
                        if (item.brand === select.value) {
                            // resolve(item);
                            output.innerHTML = `Тачка: ${item.brand} ${item.model} <br>
                            Цена: ${item.price}$`
                        }
                    });
                } else {
                    // reject('Произошла ошибка');
                    output.innerHTML = 'Произошла ошибка';
                }
            });
        });
    }

    select.addEventListener('change', () => outputMessage(urlAddress));

});