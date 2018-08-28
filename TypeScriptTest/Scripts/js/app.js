//Остановка выполнения события
//С помощью метода preventDefault() объекта Event мы можем остановить дальнейшее выполнение события.
function linkHandler(e) {

    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
    if (hour > 12) {

        e.preventDefault();
        document.write("После 12 переход запрещен");
    }
}
var link = document.getElementById("link");
link.addEventListener("click", linkHandler);