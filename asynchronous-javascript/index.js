

// console.log('I\'m line number 1')

// setTimeout(()=>{
//     console.log('I\'m line number 2')
// },3000)

// setTimeout(()=>{
//     console.log('I\'m line number 3')
// },0)

// console.log('I\'m line number 4')

// setTimeout(()=>{
//     console.log('I\'m line number 5')
// },1000)



// setTimeout(()=>{
//     console.log('I\'ve done!')
// },)

// const sayMyName = (name) => {

//     setTimeout (()=>{
//         console.log('I\'ve done')
//         console.log(name)
//     }, 3000)
// }
// console.log(sayMyName('Arham Apel'))



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'One')
// });
// console.log(p1)

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'Two')
// });
// console.log(p2)

// p1.then((v) => {
//     console.log(v)
// }).catch((e) => {
//     console.log(e)
// })



// const getIphone = (isTrue) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isTrue){
//                 resolve('You have got Iphone!')
//             }
//             else{
//                 reject(new Error('You failed!'))
//             }
//         }, 2000)
//     })
// }


// getIphone(false)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log(e.message)
//     })



// const getSurprise = (isCome) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             if(isCome){
//                 resolve('I Love You Chandu Sona!');
//             }
//             else{
//                 reject(new Error('I hate you Chandu'))
//             }
//         }, 2000)
//     })
   
// }


// getSurprise(true)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log(e.message)
//     })


const getVar = () => {
    setTimeout(()=>{
        console.log('I am function call after 5s')
    }, 5000)
}

function name(){
    console.log('Arham Apel')
}

getVar()
name()