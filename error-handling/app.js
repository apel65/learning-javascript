
// function changeToInt(value) {
//     let result = Number.parseInt(value);
//     if(!result){
//         return 'Please provide a available number!'
//     }

//     return result;
// }


// console.log(changeToInt({}))



// function makeWord(text) {
//    try {
//     let str = text.trim();
//     let world = str.split(' ');
//     return world;   
//    } catch (e) {
//     //    console.log(e.message)
//     console.log('Please provide a valid text!')
//    }
// }

// let result = makeWord('I am developer');
// console.log(result)


try{
    console.log('I am line number 1');
    throw new Error('here is error')
    console.log('I am line number 1')
    console.log('I am line number 1')
    console.log('I am line number 1')
}catch{
    console.log('error....!')
}finally{
    console.log('I am finally block')
}