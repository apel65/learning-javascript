// function extend (Parent, Child){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape (color){
//     this.color = color
// }

// Shape.prototype.common = function () {
//         console.log('I am common Method')
//     }



// function Square(width,color) {
//     Shape.call(this, color)
//     this.width = width;
// }


// Square.prototype.draw = function () {
//         console.log('I am draw width');
// }
// extend(Shape, Square);

// var sqr = new Square(10, 'green');
// var shpe = new Shape();

// function Circle (color, radius){
//     Shape.call(this, color)
//     this.radius = radius;
// }

// extend(Shape, Circle)

// Circle.prototype.common = function(){
//     Shape.prototype.common.call(this)
//     console.log('I am calling from Circle and I have overridden.')
// }

// var cr = new Circle('yellow', 5);


var canWalk = {
    walk: function () {
        console.log('Walking......')
    }
}

var canEat = {
   eat: function () {
        console.log('Eating.....')
    }
}

// var person = Object.assign({}, canWalk, canEat);
// person.name = 'Arham Apel'
// console.log(person)

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, canEat, canWalk)

var p1 = new Person('Arham Apel');
console.log(p1)