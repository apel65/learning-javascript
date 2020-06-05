// Filter even Number 

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i<number.length; i++){
    var element = number[i];
    if(element % 2 == 0){
        console.log('The even numbers is: ' + element)
    }
}
