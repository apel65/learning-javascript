var arr = [1, 3, 4, 5, 6, 7, 7];

var result = arr.reduce(function(prev, curr){
    return prev + curr;
}, 100)

console.log(result);