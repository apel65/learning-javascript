
const person = {
    name: 'Arhma Apel',
    email: 'apelmahmud.kpi@gmail.com',
    job: 'Learner',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

const {name, email, job, address:{city, country}} = person;

console.log(city)

// const name = person.name;
// const email = person.email;
// const job = person.job;

// console.log(name, email, job)

