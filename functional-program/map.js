var arr = [1, 3, 4, 6]

// var sqrArr = arr.map(function(value){
//     // return Math.random()*100;
//     return value * value
// })
// console.log(arr)
// console.log(sqrArr)

function myMap(arr, cb){
    var newArr = [];
    for(i = 0; i<arr.length; i++){
        
        var temp = cb(arr[i], i, arr)
        newArr.push(temp);
    }
    return newArr;
}

// console.log(myMap(arr))

var qb = myMap(arr, function(value){
    return value * value * value;
})

var mten = myMap(arr, function(value){
    return value * 10;
})

// console.log(arr);
// console.log(qb);
// console.log(mten);



const webDeveloper = [
    {name: 'Jhankar Mahbub', id: 4565, years: 6, salery: 65000},
    {name: 'Apel Mahmud', id: 4560, years: 6, salery: 50000},
    {name: 'Arham Apel', id: 4453, years: 2, salery: 45000},
    {name: 'Sojib Prodhan', id: 9840, years: 5, salery: 30000 },
    {name: 'Nasim', id: 8730, years: 4, salery: 20000}
]


const developersName = webDeveloper.map(developer => developer.name);
console.log(developersName)

const allSalery = webDeveloper.map(developer => developer.salery);
console.log(allSalery)