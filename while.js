// var num = 0;
// while(num<=10){
//     console.log(num);
//     num++;
// }

// while(num<=10){
//     var result = num * 10;
//     console.log(result);
//     num++;
// 

// var rand = Math.random();
// var randNum = Math.round(rand*50);
// // console.log(randNum);

// while(randNum<=50){
//     if(randNum == 40){
//         console.log('Winner winner you won the chiken dinner!');
//     }
//     else{
//         console.log('You have the number.');
//     }
//     randNum++;
// }


// var isStopCoronaVirus = true;

// while(isStopCoronaVirus){
//     var date = Math.round(Math.random() * 10);

//     if(date == 9){
//         console.log('The students will come their institute 9 April.');
//     }
//     else{
//         console.log('Institute being stop untill the stop Covid-19');
//     }
   
//     isStopCoronaVirus = false;
// }



while(true){                                        
    var date = Math.round(Math.random() * 10);

    if(date == 9){
        console.log('The students will come their institute 9 April.');
        break;
    }
    else{
        console.log('Institute being stop untill the stop Covid-19');
    }
}
