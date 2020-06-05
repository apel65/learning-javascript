
// object literal vs constructor
//object 

// var obj = {};
// obj.x = 10;
// console.log(obj);

// var point = {
//     x: 10,
//     y: 20
// }

// // point.y = 30;               //replace data in y
// point.z = 30;

// console.log(point)





//Constructor object

// var obj = Object()

// obj.Math = 30;
// obj.English = 50;
// console.log(obj)

// var subjectMark = new Object();
// subjectMark.Bangla = 50;
// subjectMark.English = 60;
// subjectMark.Math = 90;
// console.log(subjectMark);





//3.

var point = {
    x: 10,
    y: 20,
    z: 30,
}

// var sum = (point.x + point.y);              //(.)dot notation
// console.log(sum)
// console.log(point.x + point.y);

// console.log(point['x']);
// console.log(point['y']);        //Array notation

// var show = 'z';
// console.log(point[show])

point['x'] = 80;

var add = 'c';
point[add] = 40;

console.log(point.d)

delete point.c
delete point.z
console.log(point)
