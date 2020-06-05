
//5. How to search data from an Array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var find = 2;
var isFound = false;

for (i = 0; i<numbers.length; i++){
    if(numbers[i] == find){
        console.log('Data found index: '+ i);
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log('Data not Found');
}