// Student Objects

let student1 = {
    name: "Rahul",
    course: "Web Development",
    age: 20,
    marks: 420
};

let student2 = {
    name: "Priya",
    course: "Python",
    age: 21,
    marks: 390
};

let student3 = {
    name: "Amit",
    course: "Java",
    age: 22,
    marks: 310
};

let student4 = {
    name: "Neha",
    course: "Web Development",
    age: 20,
    marks: 470
};

let student5 = {
    name: "Rohan",
    course: "Python",
    age: 23,
    marks: 180
};

// Array

let students = [
    student1,
    student2,
    student3,
    student4,
    student5
];

// Total Marks

let totalMarks = 500;

// Loop

students.forEach(function(student){

    let percentage = (student.marks / totalMarks) * 100;

    let result;

    if(percentage >= 40){
        result = "Pass";
    }else{
        result = "Fail";
    }

    let grade;

    if(percentage >= 80){
        grade = "A";
    }
    else if(percentage >= 60){
        grade = "B";
    }
    else if(percentage >= 40){
        grade = "C";
    }
    else{
        grade = "F";
    }

    console.log("Student Name :", student.name);
    console.log("Total Marks :", student.marks);
    console.log("Percentage :", percentage.toFixed(2) + "%");
    console.log("Result :", result);
    console.log("Grade :", grade);
    console.log("---------------------------");

});