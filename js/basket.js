// Создание объекта для отслеживания товаров
var cartItems = {};

function insertProductName(productName) {
    var textarea = document.getElementById('text');
    if (textarea.value !== '') {
        textarea.value += ', ';
    }

    // Проверка, есть ли товар уже в корзине
    if (cartItems.hasOwnProperty(productName)) {
        cartItems[productName] += 1; // Увеличение количества товара
    } else {
        cartItems[productName] = 1; // Добавление нового товара в корзину
    }

    // Обновление значения в текстовом поле
    textarea.value = formatCartItems();
    
    // Отправка данных формы на сервер
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'sendmail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Обработка ответа сервера, если необходимо
        }
    };
    var formData = 'cartItems=' + encodeURIComponent(JSON.stringify(cartItems));
    xhr.send(formData);

    // Перемещение на пункт с окошком с текстом
    window.location.href = '#text';
}

// Форматирование списка товаров для отображения в текстовом поле
function formatCartItems() {
    var formattedItems = '';

    // Проход по всем товарам в корзине
    for (var item in cartItems) {
        if (cartItems.hasOwnProperty(item)) {
            formattedItems += item + ' (x' + cartItems[item] + '), ';
        }
    }

    // Удаление лишней запятой и пробела в конце строки
    formattedItems = formattedItems.replace(/,\s$/, '');

    return formattedItems;
}
