document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
          output = document.getElementById('output');

    const outputMessage = (carData) => {
        return new Promise(() => {
            const request = new XMLHttpRequest();
            request.open('GET', './scripts/cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);
                    data.cars.forEach(item => {
                        if (item.brand === select.value) {
                            const {brand, model, price} = item;
                            output.innerHTML = `Тачка: ${brand} ${model} <br>
                            Цена: ${price}$`;
                        }
                    });
                } else {
                    output.innerHTML = 'Произошла ошибка';
                }
            });
        });
    }
    
    select.addEventListener('change', outputMessage);
});