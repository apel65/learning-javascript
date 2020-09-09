var arr = [1, 2, 3, 4, 5, 7, 33, 24, 22, 6];

// var result = arr.find(function(value){
//     return value == 35;
// })

// console.log(result)


function myFind(arr, cb){
    for(i = 0; i<arr.length; i++){
        if(cb(arr[i])){
            return arr[i];
        }
    }
}

var result = myFind(arr, function(value){
    return value == 4;
})

// console.log(result);



const webDeveloper = [
    {name: 'Jhankar Mahbub', id: 4565, years: 6, salery: 65000},
    {name: 'Apel Mahmud', id: 4560, years: 6, salery: 50000},
    {name: 'Arham Apel', id: 4453, years: 2, salery: 45000},
    {name: 'Sojib Prodhan', id: 9840, years: 5, salery: 30000 },
    {name: 'Nasim', id: 8730, years: 4, salery: 20000}
]


const experinceYears = webDeveloper.find(developer => developer.years > 2);
console.log(experinceYears)


