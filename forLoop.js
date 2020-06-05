//for loops

// var num = 10;
// for(i = 0; i<=num; i++){
//     console.log(i);
// }


// var value = 0;

// for(i = 0; i<Infinity; i++){
//     console.log(i);
// }

// var name = "Apel Mahmud";

// for (i = 0; i < 10; i++){
//     console.log((i+1)+ " " + name);
// }


// for(i = 1; i<1000; i+=2){
//     console.log(i);
// }

// for (i = 0; i<=100; i++){
//     if (i % 2 == 0){
//         console.log('The even number is :'+ i);
//     }
// }


// for(i = 0; i<=100; i++){
//     if(i % 2 == 1){
//         console.log("The odd number is: "+ i);
//     }
// }


// var sum = 0;

// for (i = 0; i<=10; i++){
//     console.log(sum + " + " + i + " + " + (sum+i));
//     sum += i;
// }

// console.log("The result is: "+ sum);


//The even numbers summetion

// var sum = 0;

// for(i = 0; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(sum + ' + ' + i + ' + ' + (sum+i));

//         sum += i;  //sum = sum + i
//     }
// }

// console.log('The summetion is: '+ sum);


//the odd numbers summetion
var sum = 0;
for (i = 0; i<=100; i++){
    if(i % 2 == 1){
        sum += i;
    }
}

console.log("The odd numbers summetion is: "+ sum);