//First class function
function add(a, b){
    return a+b;
}

//1. A function can be stored in a variable
// var sum = add;
// console.log(sum(1,4))
// console.log(typeof sum)

//2. A function can be stored in a array
var arr = [];
arr.push(add);
console.log(arr)
console.log(arr[0](2, 6));

//3. A function can be stored in a object
var obj = { 
    sum: add
}

console.log(obj)
console.log(obj.sum(33, 2))

//4. We can create function as need
setTimeout(function(){
    console.log('I have created....')
},100)

//5. We can pass function as an argument
//6. We can return function from another function
