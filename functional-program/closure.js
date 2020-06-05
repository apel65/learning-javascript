var a = 10;

function x() {
    b = 20;
    return function (){
        console.log(b)
    }
}

var abc = x();
console.dir(abc)