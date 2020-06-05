
// let sum = (...rest) => {
//     return rest.reduce((a, b) => a + b)
// }

// console.log(sum(1,3, 4, 5, 6, 7, 8, 0));

// const arr = [1, 3, 4, 5, 6];
// console.log(...arr)


// let arr = ['Arham', 'Apel', 'Sumaya'];

// arr = ['Amir', ...arr, 'Amrul'];
// console.log(arr)



let num = (...arguments) =>  arguments;

console.log(num(3,5, 4,56 ,6));