﻿var date = new Date(); // получаем текущую дату
var time = date.getHours(); // получаем текущее время в часах
if (time < 13) // сравниваем время с число 13
    alert('Доброе утро!'); // если время меньше 13
else
    alert('Добрый вечер!'); // если время равно 13 и больше