class Worker {
    constructor(nameAndSurname, dayRate, workingDays) {
        this._nameAndSurname = nameAndSurname
        this._dayRate = dayRate
        this._workingDays = workingDays
        this._workers = []
    }

    #experience = 1.2

    addWorker(worker) {
        this._workers.push({ name: worker.showFullName(), salary: worker.showSalaryWithExperience() })
    }

    printWorkers() {
        let str = ""
        for (let i = 0; i < this._workers.length; i++) {
            const element = this._workers[i]
            str += element.name + " "
            str += element.salary + "\n"
        }
        return str
    }

    sortedValueBySalary() {
        this._workers.sort((a, b) => a.salary - b.salary)
    }

    getExp() {
        return this.#experience
    }

    setExp(value) {
        this.#experience = value
    }

    showFullName() {
        return this._nameAndSurname
    }

    showSalary() {
        return this._workingDays * this._dayRate
    }

    showSalaryWithExperience() {
        return this._workingDays * this._dayRate * this.#experience
    }
}

console.log("Tasks 3")
const worker1 = new Worker("John Johnson", 20, 23)
console.log(worker1)
console.log(worker1.showFullName())
console.log("Salary", worker1.showSalary())
console.log("New experience:", worker1.getExp())
console.log("showSalaryWithExperience", worker1.showSalaryWithExperience())
worker1.setExp(1.5)
console.log("New experience:", worker1.getExp())
console.log("showSalaryWithExperience", worker1.showSalaryWithExperience())

const worker2 = new Worker("Tom Tomson", 48, 22)
console.log(worker2)
console.log(worker2.showFullName())
console.log("Salary", worker2.showSalary())
console.log("New experience:", worker2.getExp())
console.log("showSalaryWithExperience", worker2.showSalaryWithExperience())
worker2.setExp(1.5)
console.log("New experience:", worker2.getExp())
console.log("showSalaryWithExperience", worker2.showSalaryWithExperience())

const worker3 = new Worker("Andy Ander", 29, 23)
console.log(worker3)
console.log(worker3.showFullName())
console.log("Salary", worker3.showSalary())
console.log("New experience:", worker3.getExp())
console.log("showSalaryWithExperience", worker3.showSalaryWithExperience())
worker3.setExp(1.5)
console.log("New experience:", worker3.getExp())
console.log("showSalaryWithExperience", worker3.showSalaryWithExperience())

console.log("Sorted salary:!")

const workers = new Worker()
workers.addWorker(worker1)
workers.addWorker(worker2)
workers.addWorker(worker3)
workers.sortedValueBySalary()
console.log(workers.printWorkers())

// let workers = [{ name: worker1.showFullName(), salary: worker1.showSalaryWithExperience() }, { name: worker2.showFullName(), salary: worker2.showSalaryWithExperience() }, { name: worker3.showFullName(), salary: worker3.showSalaryWithExperience() }]
// console.log(workers.sort((a, b) => a.salary - b.salary))