var person = [
    {
    name: 'Shayra',
    age: 15
    },

    {
        name: 'Apel',
        age: 22
    },

    {
        name: 'Sumaya',
        age: 12
    }
]

var arr = [1, , 3, 4, 5, 3, 4, 3, , , 5, 6,7 , 5, 4, 6, 7, 4, 5, 6,7 , 5, -3];

//Decending Order
arr.sort(function(a, b){
    if(a>b){
        return -1;
    }else if(a<b){
        return 1;
    }else{
        return 0;
    }

})
console.log(arr)


//Accending order 
person.sort(function(a, b){
    if(a.age > b.age){
        return 1;
    }else if(a.age < b.age){
        return -1;
    }else{
        return 0;
    }
})
   
console.log(person)

var result = arr.every(function(value){
    return value > 0;
})

console.log(result);

var result2 = arr.some(function(value){
    return value < 0;
})

console.log(result2)