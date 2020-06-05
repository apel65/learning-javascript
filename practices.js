class Person {
    constructor(name, age, job){
        this.name = name
        this.age = age
        this.job = job
        this.address = {
            city: 'Gaibandha',
            country: 'Bangladesh'
        }
    }
}

// const arham = new Person('Arham Apel', 22, 'Student');
// console.log(arham)
// const sayra = new Person('Sharmin Akter', 15, 'Student');
// console.log(sayra);

class Teacher extends Person {
    constructor(name, age, job, subject){
        super(name, age, job)
        this.subject = subject
        this.address = {
            city: 'Rongpur',
            country: 'Bangaldesh'
        }
    }
}

Teacher.prototype.dateOfBirth = function(){
    console.log(`${this.name} is born in ${2020 - this.age}.`);
}

const musfique = new Teacher('Musfiqur Rohoman', '55', 'Teacher', 'Computer');
musfique.dateOfBirth()