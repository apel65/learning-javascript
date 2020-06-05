// 3. Array Traverse

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sum = 0;

for (i = 0; i<number.length; i++){
    var element = number[i];
    sum += element;                 //sum = sum + element
}

console.log(sum)