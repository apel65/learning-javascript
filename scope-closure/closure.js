
// var passed = 3;

// var result = function(){
//     var a = 20;
//     return (passed + a);
// }

// console.dir(result());

function callGf(){
     var name = 'Shayra';
    return function(){            
        console.log('Hello ' + name + ' jan');
     }
}

var calling = callGf();

calling();