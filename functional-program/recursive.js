//same as like as for loop
function sum(n){

    if(n == 1){
        return 1;
    }
    
    return n + sum(n - 1);
}

console.log(sum(4));