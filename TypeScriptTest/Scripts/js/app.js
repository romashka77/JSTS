var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var myDate = new Date();
var fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
document.writeln(fullDate); // Сегодня: 18 Август 2015, Вторник


var welcome;
var myDate = new Date();
var hour = myDate.getHours();
var minute = myDate.getMinutes();
var second = myDate.getSeconds();
if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
if (hour < 12) {
    welcome = "Доброе утро";
} else if (hour < 17) {
    welcome = "Добрый день";
} else {
    welcome = "Добрый вечер";
}
document.writeln(welcome + ", текущее время: " + hour +
    ":" + minute + ":" + second); // Добрый вечер, текущее время: 22:50:39

var myDate = new Date();
myDate.setDate(15);
myDate.setMonth(6);
myDate.setYear(2013);

var fullDate2 = myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
document.writeln(fullDate2); // 15 Июль 2013, Понедельник