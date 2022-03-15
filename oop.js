class Student {
    constructor(fullName, direction) {
        this._fullName = fullName
        this._direction = direction
    }

    get direction() {
        return this._direction
    }

    set direction(value) {
        this._direction = value
    }

    showFullName() {
        return "fullName - " + this._fullName
    }

    nameIncludes(data) {
        return this._fullName.includes(data)
    }

    static studentBuilder() {
        return new Student('Ihor Kohut', 'qc')
    }
}

const stud1 = new Student('Ivan Petrenko', 'web')
const stud2 = new Student('Sergiy Koval', 'python')
const stud3 = Student.studentBuilder()
console.log("Tasks 1")
console.log("studentBuilder", stud3)
console.log(stud1, stud2)
console.log("First Student")
console.log(stud1.showFullName())
console.log("Find Ivan", stud1.nameIncludes('Ivan'))
console.log("Find Vova", stud1.nameIncludes('Vova'))
console.log("Second Student Change Direction")
console.log("Before", stud2.direction)
stud2.direction = "js"
console.log("After", stud2.direction)
console.log(stud2)
