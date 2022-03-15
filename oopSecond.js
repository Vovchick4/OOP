class Person {
    constructor(name, surname) {
        this._name = name
        this._surname = surname
    }

    showFullName() {
        return this._name + " " + this._surname
    }
}

class Student1 extends Person {
    constructor(name, surname, year) {
        super(name, surname)
        this._year = year
    }

    showFullName(middleName = "") {
        return this._name + " " + this._surname + " " + middleName
    }

    showCourse() {
        return new Date().getFullYear() - this._year
    }
}
const stud4 = new Student1("Petro", "Petrenko", 2017)
console.log("Tasks 2")
console.log(stud4)
console.log("showFullName -", stud4.showFullName())
console.log("midleName -", stud4.showFullName("Volodymyrovich"))
console.log("showCourse -", stud4.showCourse())