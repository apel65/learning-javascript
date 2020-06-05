var arr = [1, 2, 4, 6, 7, 8, 9];

// var filteredArr = arr.filter(function(value){
//     return value % 2 == 1;
// })

// console.log(filteredArr)

var filterd = function(arr, cb){
    var newArr = [];
    for(i = 0; i<arr.length; i++){
        if(cb(arr[i], i, arr)){
            var temp = arr[i];
            newArr.push(temp);
        }
    }
    return newArr;
}

// console.log(func(arr))

var result = filterd(arr, function(value){
    return value % 2 == 1;
})

console.log(result)

