class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static nameToUpper(person) {
        return person.name.toUpperCase();
    }
    display() {
        console.log(this.name, this.age);
    }
}
let tom = new Person("Tom Soyer", 34);
let personName = Person.nameToUpper(tom);
console.log(personName);        // TOM SOYER