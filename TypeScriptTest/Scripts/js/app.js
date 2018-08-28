var clicks = 0;
function handlerOne(e) {

    alert(e.type);
}
function handlerTwo(e) {

    clicks++;
    var newNode = document.createElement("p");
    newNode.textContent = "произошло нажатие " + clicks;
    document.body.appendChild(newNode);
}
var rect = document.getElementById("rect");
// прикрепляем первый обработчик
rect.addEventListener("click", handlerOne);
// прикрепляем второй обработчик
rect.addEventListener("click", handlerTwo);