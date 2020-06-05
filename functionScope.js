var a = 'abc';

// if(true){
//     // var a = 10;
//     if(true){
//         var a = 4;
//         console.log(a);
//     }
// }

// function x(){
//     var a = 2;
//     function y(){
//         var a = 10;
//         console.log(a)
//     }
//     y();
// }

// x()

function test(n){
    function a(){
       return n % 3 == 0;
    }
    function b(){
        return n % 5 == 0;
    }

    if(a() && b()){
        console.log(n + ' is divisible by 3 and 5');
    }
    else{
        console.log('not divisible');
    }
}

test(30)