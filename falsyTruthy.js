
//Falsy Value in javascript

//There are seven falsy value in the bellow;

// 0, null, Nan, undefined, '', false, 0n
console.log('There are seven falsy Values');

console.log('1 ' + Boolean(0));
console.log('2 ' + Boolean(null));
console.log('3 ' + Boolean(NaN));
console.log('4 ' + Boolean(undefined));
console.log('5 ' + Boolean(''));
console.log('6 ' + Boolean(false));
console.log('7 ' + Boolean(0n))

//Extra falsy values from 0
console.log('1 ' + Boolean(+0))
console.log('1 ' + Boolean(-0))



//unless above all everything is truthy values in javascript

console.log('There are everythig is truthy Values')
console.log(Boolean(1));
console.log(Boolean(-56));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean('0'));
console.log(Boolean('Apel'));
console.log(Boolean(33));