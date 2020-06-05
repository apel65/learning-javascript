function greet(msg){
    function greetings(name){
        return msg + ', ' + name + '!.';
    }
    return greetings;
}

var gm = greet('Good Morning');
var msg = gm('Apel Mahmud');
console.log(msg);

var hello = greet('hi')
console.log(hello('Junnun'))

console.log(gm('Shayra Banu'))