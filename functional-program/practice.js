
const arr = [1, 3, 4 ,5, 6, 7, 8, 9];

const newMap = (arr, cb) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const temp = cb(arr[i], i, arr);
        newArr.push(temp);
    }
}


const result = newMap(arr, index => console.log())

result

