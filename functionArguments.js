// function add(a, b){
//     var result = a + b;
//     console.log(result);
// }


// add(10, 30);

// var arr = [2, 3, 4, 5];
// var arr2 = [3, 2, 5, 7];
// var arr3 = [7, 4, 8, 6];

// var sum = 0;
// for(i = 0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum);

// function ArraySum(arr) {
//     var sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }

// var arr4 = [33, 44, 66, 7887]
// ArraySum([2, 4, 5]);
// ArraySum([4, 5, 6, 7, 8]);
// ArraySum(arr4);

// function myFun(a, b, c){
//     console.log(arguments);
// }

// myFun(10, 30, 50);

// function arg(){                     //Without peramitter
//     console.log(arguments);
// }

// arg(33, 4, 5, 6, 35, 6);

function addSum(){
    var sum = 0;
    for (i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum);
}

addSum(33, 2, 3, 5, 4, 3, 55);

