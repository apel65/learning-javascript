var arr = [1, 2, 3, 4, 5, 7, 33, 24, 22, 6];

// var result = arr.find(function(value){
//     return value == 35;
// })

// console.log(result)


function myFind(arr, cb){
    for(i = 0; i<arr.length; i++){
        if(cb(arr[i])){
            return arr[i];
        }
    }
}

var result = myFind(arr, function(value){
    return value == 4;
})

console.log(result);


