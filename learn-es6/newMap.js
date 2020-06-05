
// let arham = new Map();
// arham.set('fullName', 'Arham Apel');
// arham.set('Job', 'Student')
// arham.set('toberemove', 'willberemove')
// console.log(arham.get('fullName'))
// console.log(arham.has('fullName'));
// console.log(arham.delete('toberemove'))
// console.log(arham.has('toberemove'))
// arham.clear()
// console.log(arham)

const person = new Map();
person.set('Name', 'Arham Apel');
person.set('Age', '22');
person.set('Profession', 'Learner');
person.set('food', 'Rice')

// person.forEach((value, key) => console.log(`value is ${value} and key is ${key}`))

for(let [key, value] of person.entries()){
    console.log(`key is ${key} and value is ${value}`)
}