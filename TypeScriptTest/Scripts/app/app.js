var el = this.document.getElementById("content");
var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Роман", 31);
//el.innerHTML =
console.log("Имя: " + tom.name + " возраст: " + tom.age);
//# sourceMappingURL=app.js.map