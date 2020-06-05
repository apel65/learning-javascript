//Object Literal 

var rect = {
    height: 50,
    width: 100,

    draw: function () {
        console.log('I am rectangle');
        this.printPropertise()
    },

    printPropertise: function () {
        console.log('My height is = '+ this.height);
        console.log('My width is = '+ this.width);
    }
}

// rect.draw()

// rect.height = 70;
// rect.draw();


// function myfun(){
//     console.log(this);
    
// }

// new myfun()

// var another = {
//     height: 46,
//     width: 56,
//     print: rect.printPropertise()
// }

// another.print


// var myObj = {
//     name: 'Apel Mahmud',
//     age: 21,
//     timer: function () {
//        setTimeout (function (){
//         console.log('My name is ' + this.name);
//        }.bind(myObj), 1000)
//     }
// }

// myObj.timer()


// var Person = function(name){
//    this.name = name;
// }

// var p1 = new Person('Apel');
// console.log(p1);

// console.log(Person.prototype);


function Square (width){
    this.width = width;

}

Square.prototype = {
    draw:  this.draw = function (){
        console.log('Draw');
    },
    toString: function (){
        return 'My width is = ' + this.width;
    }
}

var sqr1 = new Square(10);
var sqr2 = new Square(33)
console.log(sqr1);
console.log(sqr2);

