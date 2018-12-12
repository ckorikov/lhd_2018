var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'https://google.com');

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText + 'Something wrong...'); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}

const listOfParties = [[52.5160, 13.3862], [52.5260, 13.3962], [52.5190, 13.3890]]
listOfParties.forEach(element => {
    addDomMarker(map,element[0],element[1])
});

