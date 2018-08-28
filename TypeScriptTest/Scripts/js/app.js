function handler(event) {

    console.log("Тип события: " + event.type);

    console.log(event.target);
    event.target.style.backgroundColor = "red";
}
var rect = document.getElementById("rect");
rect.addEventListener("click", handler);
//bubbles: возвращает true, если событие является восходящим.Например, если событие возникло на вложенном элементе, то оно может быть обработано на родительском элементе.
//cancelable: возвращает true, если можно отменить стандартную обработку события
//currentTarget: определяет элемент, к которому прикреплен обработчик события
//defaultPrevented: возвращает true, если был вызван у объекта Event метод preventDefault()
//eventPhase: определяет стадию обработки события
//target: указывает на элемент, на котором было вызвано событие
//timeStamp: хранит время возникновения события
//type: указывает на имя события