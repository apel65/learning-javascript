// class Person {
//     constructor(name, age, profession){
//         this.name = name
//         this.age = age
//         this.profession = profession
//     }
//    static dateOfBirth(){
//         console.log(`${this.name} is born in ${2020 - this.age}`)
//     }
// }

// Person.prototype.gender = () =>{
//     console.log('Just male')
// }

// const arham = new Person('Arham Apel', 22, 'Student')



// class Teacher extends Person{
//     constructor(name, age, profession, subject){
//         super(name, age, profession)
//         this.subject = subject
//     }
// }

// const t1  = new Teacher('Musfique', 55, 'Teacher', 'Computer');




// class Rectangle {
//     constructor(height, width){
//         this.height = height
//         this.width = width
//     }
//     get area(){
//         return this.calcArea();
//     }
//     calcArea(){
//         console.log(`${this.height * this.width}`)
//     }
// }

// const r1 = new Rectangle(10, 20);
// console.log(r1)

// (
//     function hello(a, b){
//         console.log(a + b)
//         console.log('Hello, world');
//     }
// )(20, 3)


// var controller = (function(){
//     a = {
//         name: 'Arham Apel',
//         uid: 234
//     }
//     return a
// })()


// function interface(){
//     console.log('Hello', controller.name);
// }

// interface()

// (
//     function name(name){
//         var msg = 'Hello dear!'
//         console.log('My name is '.concat(name))
//     }
// )("Arham Apel")

// console.log(msg)

// {
//     var name = 'Arham Apel'
//     let a = 10;
//     let b = 20;
//     const piv = Math.PI;
//     console.log(a + b + piv)
// }

// console.log(name)


// {
//   const nam = (name)=>{
//         console.log('My name is ' + name)
//     }
//     nam('Arha Apel')
// }


// const person = {
//     name: 'Arham Apel',
//     age: 22, 
//     profession: 'A learner'
// }

// const name = person.name;
// console.log(name);
// const age = person.age;
// console.log(age)
// const profession = person.profession
// console.log(profession)

// const {name, age, profession} = person

// console.log(name)
// console.log(age)
// console.log(profession)


// const teacher = [
//     'Musfique',
//     55,
//     'CSE'
// ]

// const [name, age, subject] = teacher;

// console.log(name);
// console.log(age)
// console.log(subject)


// var numbers = [1, 3, 4, 5];


// function number(a, b, c, d){
//     console.log('Sum: ' + (a + b + c + d));
// }

// number.apply(null, numbers)

// var numbers = [1, 3, 4, 5, 6];


// function number(a, b, c, d, e){
//     console.log('Sum: ' + (a + b + c + d + e));
// }

// number(...numbers)


// let arr = ['Arham', 'Apel', 'Sumaya'];

// console.log(...arr)


// const person = (name, age, ...others) => {
//     console.log(`I am ${name} and I\'m ${age} years old`);
//     others.map(other => console.log(`Argument Pss: ${other}`))
// }

// person('Arham Apel', 22, 'Learner', 'Front End Developer')

// let arham = new Map();
// arham.set('fullName', 'Arham Apel');
// arham.set('Job', 'Student')
// arham.set('toberemove', 'willberemove')
// console.log(arham.get('fullName'))
// console.log(arham.has('fullName'));
// console.log(arham.delete('toberemove'))
// console.log(arham.has('toberemove'))
// arham.clear()
// console.log(arham)


// const arr = [1, 3, 4, 6];

// for (i of arr){
//     console.log(i)
// }



function name(name = 'Arham Apel', age = 22) {
    console.log('Your name is: '+name + ' and age is: ' + age)
}

name()