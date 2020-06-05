function sample(a, b, callback){
    c = a + b;
    d = a - b;
    var result = callback(c, d)
    return result
}

function sum(a, b){
    return a + b;
}

console.log(sample(8, 5, sum))

var result = sample(8, 5, function(c, d){
    return c - d;
})

console.log(result);


var result2 = sample(8, 5, function(c, d){
    return c * d;
})

console.log(result2)