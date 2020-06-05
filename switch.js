// var date = new Date();
// var toDay = date.getDay();

// count:  0 = sunday, 1 = monday, 2 = tuesday, 3 = wednesday, 4 = thursday, 5 = friday, 6 = satardar

// switch(toDay){
//     case 0:
//         console.log('Today is Sunday');
//         break;
//     case 1:
//         console.log('Today is Monday');
//         break;
//     case 2: 
//         console.log('Today is Tuesday');
//         break;
//     case 3:
//         console.log('Today is Wednesday');
//         break;
//     case 4:
//         console.log('Today is Thursday');
//         break;
//     case 5:
//         console.log('Today is Friday');
//         break;
//     case 6:
//         console.log('Today is Satarday');
//         break;
//     default:
//         console.log('Nothing found here..');
// }


// var x = 0;

// switch(x){
//     case 1:
//         console.log('This is one');
//         break;
//     default:
//             console.log('Nothing found');
// }


// var gscore = 70;

// switch(gscore){
//     case 90:
//         console.log('A');
//         break;
//     case 80:
//         console.log('B');
//     case 70:
//         console.log('c');
//         break;
//     case 60:
//          console.log('Passed');
//          break;
//     default:
//         console.log("You Failed in All subjects");


//determine the result mark

var mark = 94;

switch(true){
    case (mark <= 35):
        console.log("You Fail");
        break;
    case (mark >= 36 && mark <= 60):
        console.log("Just Pass");
        break;
    case (mark >= 61 && mark <= 70 ):
        console.log("Good result");
        break;
    case (mark >= 71 && mark <= 80):
        console.log("Well done");
        break;
    case (mark >= 81 && mark <= 100):
        console.log("Wow, Excellent result");
        break;
}