const prompt = require('prompt-sync')();

let stuName = prompt('What is the students name? ');
let assignName = prompt('What assignment are you grading? ');
let gradeInt = parseInt(prompt(`What grade did ${stuName} get in the ${assignName} assignment? `));


if (gradeInt >= 90 && gradeInt <= 100){
    console.log(`${stuName} got an A on the ${assignName} assignment.`);
} else if (gradeInt >= 80 && gradeInt <= 89){
    console.log(`${stuName} got a B on the ${assignName} assignment.`);
} else if (gradeInt >= 70 && gradeInt <= 79){
    console.log(`${stuName} got a C on the ${assignName} assignment.`);
} else if (gradeInt >= 60 && gradeInt <= 69){
    console.log(`${stuName} got a D on the ${assignName} assignment.`);
} else if (gradeInt >= 0 && gradeInt <= 59){
    console.log(`${stuName} got a F on the ${assignName} assignment.`);
} else{
    console.log('Invalid Input! The Grade must be between 0-100.');
}