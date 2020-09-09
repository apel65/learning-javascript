var arr = [1, 3, 4, 5, 6, 7, 7];

// var result = arr.reduce(function(prev, curr){
//     return prev + curr;
// },0)

// console.log(result);



// const total = arr.reduce((total, item) => {
//     return total += item;
// })

// console.log(total)


const webDeveloper = [
    {name: 'Jhankar Mahbub', id: 4565, years: 6, salery: 65000},
    {name: 'Arham Apel', id: 4453, years: 2, salery: 45000},
    {name: 'Sojib Prodhan', id: 9840, years: 5, salery: 30000 },
    {name: 'Nasim', id: 8730, years: 4, salery: 20000}
]

// const totalSalery = webDeveloper.reduce((total, developer) => total + developer.salery, 0);
// console.log(totalSalery, 'Taka')


const sum = webDeveloper.reduce((total, developer) => {
    return total + developer.salery
},0)
console.log(sum, 'Taka')

