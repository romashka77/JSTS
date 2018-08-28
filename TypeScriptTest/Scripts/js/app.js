﻿//Регулярные выражения представляют шаблон, который используется для поиска или модификации строки.Для работы с регулярными выражениями в JavaScript определен объект RegExp.
var myExp = /hello/;
var myExp = new RegExp("hello");

//Чтобы определить, соответствует ли регулярное выражение строке, в объекте RegExp определен метод test(). Этот метод возвращает true, если строка соответствует регулярному выражению, и false, если не соответствует.
var initialText = "hello world!";
var exp = /hello/;
var result = exp.test(initialText);
document.write(result + "<br/>"); // true
initialText = "beautifull wheather";
result = exp.test(initialText);
document.write(result); // false - в строке initialText нет "hello"

//Аналогично работает метод exec - он также проверяет, соответствует ли строка регулярному выражению, только теперь данный метод возвращает ту часть строки, которая соответствует выражению. Если соответствий нет, то возвращается значение null.
var initialText = "hello world!";
var exp = /hello/;
var result = exp.exec(initialText);
document.write(result + "<br/>"); // hello
initialText = "beautifull wheather";
result = exp.exec(initialText);
document.write(result); // null

//Регулярное выражение не обязательно состоит из обычных строк, но также может включать специальные элементы синтаксиса регулярных выражений. Один из таких элементов представляют группы символов, заключенные в квадратные скобки. Например:
var initialText = "обороноспособность";
var exp = /[абв]/;// /[а-я]/ - диапазон; В данном случае строка должна содержать хотя бы один символ из диапазона а-я.
var result = exp.test(initialText);
document.write(result + "<br/>"); // true

initialText = "город";
result = exp.test(initialText);
document.write(result); // false
//Выражение [абв] указывает на то, что строка должна иметь одну из трех букв.
//Если, наоборот, не надо, чтобы строка имела только определенные символы, то необходимо в квадратных скобках перед перечислением символов ставить знак ^:
var exp = /[^а-я]/;
//При необходимости мы можем собирать комбинации выражений:
var exp = /[дт]о[нм]/;//Выражение [дт]о[нм] указывает на те строки, которые могут содержать подстроки "дом", "том", "дон", "тон".

//Свойства выражений
//Свойство global позволяет найти все подстроки, которые соответствуют регулярному выражению.По умолчанию при поиске подстрок регулярное выражение выбирает первую попавшуюся подстроку из строки, которая соответствует выражению.Хотя в строке может быть множество подстрок, которые также соответствуют выражению.Для этого применяется данное свойство в виде символа g в выражениях

//Свойство ignoreCase позволяет найти подстоки, которые соответствуют регулярному выражению, вне зависимости от регистра символов в строке.Для этого в регулярных выражениях применяется символ i

//Свойство multiline позволяет найти подстроки, которые соответствуют регулярному выражению, в многострочном тексте.Для этого в регулярных выражениях применяется символ m
var exp = /мир/ig;
