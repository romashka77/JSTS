//Копирование массива. slice()
var users = ["Tom", "Sam", "Bill"];
console.log(users);             //  ["Tom", "Sam", "Bill"]
var people = users.slice();     //  глубокое копирование

people[1] = "Mike";             //  изменяем второй элемент
console.log(users);             //  ["Tom", "Sam", "Bill"]
console.log(people);            //  ["Tom", "Mike", "Bill"]
//Также метод slice() позволяет скопировать часть массива:
var users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var people = users.slice(1, 4);
console.log(people);        // ["Sam", "Bill", "Alice"]

//Метод push() добавляет элемент в конец массива:
var fruit = [];
fruit.push("яблоки");
fruit.push("груши");
fruit.push("сливы");
fruit.push("вишня", "абрикос");

document.write("В массиве fruit " + fruit.length + " элемента: <br/>");
document.write(fruit); // яблоки,груши,сливы,вишня,абрикос

//Метод pop() удаляет последний элемент из массива:
var fruit = ["яблоки", "груши", "сливы"];

var lastFruit = fruit.pop(); // извлекаем из массива последний элемент
document.write(lastFruit + "<br/>");
document.write("В массиве fruit " + fruit.length + " элемента: <br/>");
for (var i = 0; i < fruit.length; i++)
    document.write(fruit[i] + "<br/>");
//сливы
//В массиве fruit 2 элемента:
//яблоки
//груши

//Метод shift() извлекает и удаляет первый элемент из массива:
var fruit = ["яблоки", "груши", "сливы"];

var firstFruit = fruit.shift();
document.write(firstFruit + "<br/>");
document.write("В массиве fruit " + fruit.length + " элемента: <br/>");
for (var i = 0; i < fruit.length; i++)
    document.write(fruit[i] + "<br/>");
//яблоки
//В массиве fruit 2 элемента:
//груши
//сливы

//Метод unshift() добавляет новый элемент в начало массива:
var fruit = ["яблоки", "груши", "сливы"];
fruit.unshift("абрикосы");
document.write(fruit);
//абрикосы, яблоки, груши, сливы

//Метод splice() удаляет элементы с определенного индекса.Например, удаление элементов с третьего индекса:
var users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var deleted = users.splice(3);
console.log(deleted);       // [ "Alice", "Kate" ]
console.log(users);         // [ "Tom", "Sam", "Bill" ]
//Дополнительная версия метода позволяет задать конечный индекс для удаления. Например, удалим с первого по третий индекс:
var users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var deleted = users.splice(1, 3);
console.log(deleted);       // [ "Sam", "Bill", "Alice" ]
console.log(users);         // [ "Tom", "Kate" ]
//Еще одна версия метода splice позволяет вставить вместо удаляемых элементов новые элементы:
var users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
var deleted = users.splice(1, 3, "Ann", "Bob");
console.log(deleted);       // [ "Sam", "Bill", "Alice" ]
console.log(users);         // [ "Tom", "Ann", "Bob", "Kate" ]

//Метод concat() служит для объединения массивов:
var fruit = ["яблоки", "груши", "сливы"];
var vegetables = ["помидоры", "огурцы", "картофель"];
var products = fruit.concat(vegetables);
for (var i = 0; i < products.length; i++)
    document.write(products[i] + "<br/>");

//Метод join() объединяет все элементы массива в одну строку:
var fruit = ["яблоки", "груши", "сливы", "абрикосы", "персики"];
var fruitString = fruit.join(", ");
document.write(fruitString);

//Метод sort() сортирует массив по возрастанию:
var fruit = ["яблоки", "груши", "сливы", "абрикосы", "персики"];
fruit.sort();
for (var i = 0; i < fruit.length; i++)
    document.write(fruit[i] + "<br/>");

//Метод reverse() переворачивает массив задом наперед:
var fruit = ["яблоки", "груши", "сливы", "абрикосы", "персики"];
fruit.reverse();
for (var i = 0; i < fruit.length; i++)
    document.write(fruit[i] + "<br/>");
//В сочетании с методом sort() можно отсортировать массив по убыванию:
var fruit = ["яблоки", "груши", "сливы", "абрикосы", "персики"];
fruit.sort().reverse();

//Методы indexOf() и lastIndexOf() возвращают индекс первого и последнего включения элемента в массиве. Например:
var fruit = ["яблоки", "груши", "сливы", "яблоки", "груши"];
var firstIndex = fruit.indexOf("яблоки");
var lastIndex = fruit.lastIndexOf("яблоки");
var otherIndex = fruit.indexOf("вишни");
document.write(firstIndex); // 0
document.write(lastIndex);  // 3
document.write(otherIndex); // -1

//Метод every() проверяет, все ли элементы соответствуют определенному условию:
var numbers = [1, -12, 8, -4, 25, 42];
function condition(value, index, array) {
    var result = false;
    if (value > 0) {
        result = true;
    }
    return result;
};
var passed = numbers.every(condition);
document.write(passed); // false
//В метод every() в качестве параметра передается функция, представляющая условие. Эта функция принимает три параметра:
function condition(value, index, array) { }
//Параметр value представляет текущий перебираемый элемент массива, параметр index представляет индекс этого элемента, а параметр array передает ссылку на массив.
//В итоге, когда происходит вызов метода numbers.every(condition) он перебирает все элементы массива numbers и по очереди передает их в функцию condition. Если эта функция возвращает значение true для всех элементов, то и метод every() возвращает true. Если хотя бы один элемент не соответствует условию, то метод every() возвращает значение false.

//Метод some() похож на метод every(), только он проверяет, соответствует ли хотя бы один элемент условию. И в этом случае метод some() возвращает true. Если элементов, соответствующих условию, в массиве нет, то возвращается значение false:

//Метод filter(), как some() и every(), принимает функцию условия.Но при этом возвращает массив тех элементов, которые соответствуют этому условию:

//Методы forEach() и map() осуществляют перебор элементов и выполняют с ними определенный операции. Например, для вычисления квадратов чисел в массиве можно использовать следующий код:
var numbers = [1, 2, 3, 4, 5, 6];
function square(value, index, array) {

    var result = value * value;
    document.write("Квадрат числа " + value + " равен " + result + "<br/>");
};
numbers.forEach(square);
//Метод map() похож на метод forEach, он также в качестве параметра принимает функцию, с помощью которой выполняются операции над перебираемыми элементами массива, но при этом метод map() возвращает новый массив с результатами операций над элементами массива.
var numbers = [1, 2, 3, 4, 5, 6];
function square(value, index, array) {

    return result = value * value;
};
var squareArray = numbers.map(square);
document.write(squareArray);