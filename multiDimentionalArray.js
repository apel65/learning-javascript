var arr = [
    [3, 4, 5, 6, 7, 8],
    [1, 3, 4, 5, 6, 7],
    [5, 4, 3, 2, 6, 7]
]

// console.log(arr[0][0])      
// console.log(arr[1][2])     //[0] first is row of array and [2] second is collamn of array

for (i = 0; i<arr.length; i++){
    for(j = 0; j<arr[i].length; j++){
        console.log("Element " + i + ' ' + '= '+ arr[i][j]);
    };
    
}