var addtion = function(a, b){          //without function name it's called Allumination function
    return a + b;
}

console.log(addtion(23, 7));


setTimeout(function(){
    console.log('I am in danger!')
}, 5000);

setTimeout(() => {
    console.log('This is after 6 second')
}, 6000);

setTimeout(function(){
    console.log('This is after 7 second');      
},7000)

var another = addtion;
console.log(another(3, 5));