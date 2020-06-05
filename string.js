//2. literal vs Constructor string

var name = 'Apel Mahmud';                   //literal string
var name2 = String('Shayra Banu');         //Constructor string

// console.log(name2);

// var n = 10;
// var str = n + '';                  // + '' concate string for output value as string
// console.log(str);

// var x = 20;
// var str = x.toString();          //convert into string of x value
// var str = String(x);
// console.log(str);


                                    //for new line = \n
                                   //for quatation = \'
                                  //for tab        = \t
                                 //for backslash  = \\



//3. Escape Notation
var str1 = 'This is a \'string\'';
var str = 'Apel Mahmud \nShayra Banu';         // \n That means go to next line
var str3 = 'name:\t Sumaya';                  // \t for tab
var str4 = 'Nam is \\Edris Ali' ;            //for backslash enter double backslash
// console.log(str4);                           






//4. String Comparisom

// var a = 'abc';
// var b = 'abd';

// console.log(a < b);

// console.log('a' > 'A');                // a is bigger than A
// console.log('a' > 'b');             //false, a is smaller than b

var x = 1;
var y = '001';          // '001' this string convert into a number 1

// console.log(x == y);







//5. String Method

var firstName = "Kala";
var secondName = "Chan";
// var fullName = firstName +' '+ secondName;

// var fullName = firstName.concat (' ',secondName);       //.concate method
// console.log(fullName);

var name = 'I am Apel Mahmud';
// console.log(name.substr(11));               //.substr method for search Character by index
// console.log(name.substr(6,4));             //(6,4) means that 6 for index and 4 for how many character is count
// console.log(name.charAt(6));              //.charAt method for search character by index

// console.log(name.startsWith('I am'));
// console.log(name.endsWith('d'));

// console.log(name.toUpperCase());                //for uppercase;
// console.log(name.toLowerCase());               // for Lowercase;

// var x = '    Alu is a good fruits      ';
// console.log(x.trim());                         //for trim space front and end
// console.log(name.split(' '))                  // .split for make string every word







//6 String Length

//first method
var word = "Bangladesh Beautiful country";

// console.log(word.length);

// for(i = 0; i<=word.length; i++){
//     if(word.charAt(i) == ''){
//         console.log(i);
//     }
// }


//second method

var length = 0;

while(true){
    if(word.charAt(length) == ''){
        break;
    }
    else{
        length++;
    }
}

console.log(length);





//Practice above all here
