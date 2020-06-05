
// function add() {
//     let a = 19;
//     let b = 5;
//     console.log(a + b);
// }

// let sum = function () {
//     let a = 19;
//     let b = 5;
//     console.log(a + b);
// }
// add()
// sum()



// const jogfol = () => 30 + 20;
    
// console.log(jogfol())

// const x = 10
// const sqr = x => x * x;

// console.log(sqr(x))




var obj = {
    name: 'Arham Apel',
    
    print: function () {
        setTimeout(() =>{
            console.log(`Hello, ${this.name}`)
        },1000)
    }
}

obj.print()