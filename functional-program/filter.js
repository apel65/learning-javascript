var arr = [1, 2, 4, 6, 7, 8, 9];

// var filteredArr = arr.filter(function(value){
//     return value % 2 == 1;
// })

// console.log(filteredArr)

var filterd = function(arr, cb){
    var newArr = [];
    for(i = 0; i<arr.length; i++){
        if(cb(arr[i], i, arr)){
            var temp = arr[i];
            newArr.push(temp);
        }
    }
    return newArr;
}

// console.log(func(arr))

var result = filterd(arr, function(value){
    return value % 2 == 1;
})

// console.log(result)



const webDeveloper = [
    {name: 'Jhankar Mahbub', id: 4565, years: 6, salery: 65000},
    {name: 'Apel Mahmud', id: 4560, years: 6, salery: 50000},
    {name: 'Arham Apel', id: 4453, years: 2, salery: 45000},
    {name: 'Sojib Prodhan', id: 9840, years: 5, salery: 30000 },
    {name: 'Nasim', id: 8730, years: 4, salery: 20000}
]

const biggerSalery = webDeveloper.filter(developer => developer.salery >= 30000);
// console.log(biggerSalery);

const sameExperienceYears = webDeveloper.filter(developer => developer.years === 6);
console.log(sameExperienceYears)


