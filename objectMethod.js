
var obj = {
    x: 20,
    y: 30,
    z: 50
}

// var key = Object.keys(obj);                  //object method for output keys or propertise
// console.log(key);

// var value = Object.values(obj);
// console.log(value);

// var entry = Object.entries(obj);
// console.log(entry)




//How to clone object / how to create object from a object

// var obj2 = obj;                          //not currect answer
// obj.x = 100;
// console.log(obj2)

var obj2 = Object.assign({}, obj);          //currect answer
obj.x = 599;
console.log(obj)
console.log(obj2)


