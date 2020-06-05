var obj1 = {
    x: 10,
    y: 20
}

var obj2 = {
    x: 10,
    y: 20
}

// console.log(obj1 === obj2);

// console.log(obj1.x == obj2.x && obj1.y == obj2.y);        //return true

if(obj1.x == obj2.x && obj1.y == obj2.y){
    console.log(true);
}
else{
    console.log(false);
}

//JSON.stringify() use for object string

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));