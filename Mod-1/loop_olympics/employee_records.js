let employees = []

function Employee(Name, Job, Salary, Status = "Full Time" ) {
    this.Name = Name;
    this.Job_title = Job;
    this.Salary = Salary;
    this.Status = Status;
    this.printEmployeeForm = function() {
        return this.Name + " " + this.Job_title + " " + this.Salary + " " + this.Status
    }
}

let bossBaby = new Employee("Gian", "Boss Baby", 50000)
let mom = new Employee("Ally", "Mama", 70000)
let gigi = new Employee("Yeti", "Nona", 40000, "part-time")


console.log(bossBaby.printEmployeeForm())
console.log(mom.printEmployeeForm())
console.log(gigi.printEmployeeForm())

employees.push(bossBaby, mom, gigi)

// console.log(employees)



