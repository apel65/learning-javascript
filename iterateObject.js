
var obj1 = {
    x: 10,
    y: 30,
    z: 40,
    p: 50
}

console.log('x' in obj1);

//for in loop

for (i in obj1){
    // console.log(i)
    console.log(i + ':' + obj1[i])
}

