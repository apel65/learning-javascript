//convert object to array and array to object

// let obj = {
//     name: 'Arham Apel',
//     age: 22
// }

// console.log(Object.entries(obj))


// let objArr = [
//     ['a', 20],
//     ['b', 30],
//     ['c', 45]
// ]

// console.log(Object.fromEntries(objArr));







//Symble

// let s1 = Symbol();
// let s2 = Symbol('test Symble');

// console.log(s1)
// console.log(s2)






//for of loop..............................

// let arr = [1, 3, 4, 5 ,6, 6];

// for (let v of arr){
//     console.log(v)
// }


// const obj = {
//     name : 'Arham Apel',
//     age: '22'
// }


// for(let v of obj){
//     console.log(v)
// }










//set.........................

// const set = new Set([1, 3, 4, 5, 5]);
// console.log(set)

const set = new Set([]);

// set.add(2);
// set.add(4)
// set.add(4)
// set.add(5)
// // set.clear();
// // set.delete(5)

// console.log(set.has(5))
// console.log(set)


// class Rectangle  {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     draw() {
//         console.log('I am drawing.....')
//     }
// }

// const r1 = new Rectangle(22, 44);
// console.log(r1)

// console.log(typeof Rectangle)










//class and Inheritance....................

class Shape{
    constructor(color, size){
        this.color = color;
        this.size = size;
    }
}

class Rectangle extends Shape{
    constructor(color, size, height, width){
        super(color, size)
        this.height = height;
        this.width = width;
    }

    print(){
        console.log('I am drawing.....')
    }
}

const r1 = new Rectangle('Green', 'big', 20, 30)
console.log(r1)
