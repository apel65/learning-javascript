var studentData = {
    Name: 'Amir',
    Roll: 02,
    Section: 'Science',
    OptionalSubject: 'Higer Math'
}

studentData.Atitude = 'Bad';
console.log(studentData)

var studentData2 = {
    Name: 'Amir',
    Roll: 03,
    Section: 'Science',
    OptionalSubject: 'Higer Math'
}

var show = 'Roll';
console.log(studentData[show])
// studentData2['OptionalSubject'] = 'Agriculture'
// console.log(studentData2)
// console.log(JSON.stringify(studentData) == JSON.stringify(studentData2))


var studentData3 = Object.assign(studentData);
console.log(studentData3)

var keyOfSutdentData = Object.keys(studentData);
var valueOfStudentData = Object.values(studentData);
var bothOfStudentData = Object.entries(studentData);
console.log(bothOfStudentData);

