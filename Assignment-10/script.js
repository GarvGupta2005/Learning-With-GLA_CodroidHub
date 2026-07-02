console.log("External JavaScript: Hello from External Script!");

// ======================================
// Task 2: Data Types Practice
// ======================================

let name = "Aman";
let age = 22;
let isStudent = true;
let address;
let phone = null;
let population = 12345678901234567890n;
let id = Symbol("id");

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Undefined:", address);
console.log("Null:", phone);
console.log("BigInt:", population);
console.log("Symbol:", id);

// ======================================
// Task 3: Student Information
// ======================================

let studentName = "Aman";
let studentAge = 20;
let course = "Full Stack Development";
let city = "Ambala";

console.log("Student Name:", studentName);
console.log("Age:", studentAge);
console.log("Course:", course);
console.log("City:", city);

// ======================================
// Task 4: Employee Object
// ======================================

let employee = {
    name: "Rahul",
    department: "IT",
    salary: 50000,
    experience: 4
};

console.log(employee);
console.log(employee.name);
console.log(employee.salary);

employee.salary = 60000;

console.log(employee);

// ======================================
// Task 5: Mobile Object
// ======================================

let mobile = {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 70000,
    color: "Black"
};

console.log(mobile);

mobile.price = 65000;

console.log(mobile);

// ======================================
// Task 6: Array Practice
// ======================================

let fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes"
];

console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

fruits.push("Pineapple");
fruits.push("Kiwi");

console.log("Length:", fruits.length);
console.log(fruits);

// ======================================
// Task 7: Student Array
// ======================================

let subjects = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NodeJS"
];

console.log(subjects[0]);
console.log(subjects[2]);

subjects.push("MongoDB");

console.log(subjects.length);
console.log(subjects);

// ======================================
// Task 8: Arithmetic Operators
// ======================================

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// ======================================
// Task 9: Salary Calculator
// ======================================

let basicSalary = 25000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;

console.log("Total Salary:", totalSalary);

// ======================================
// Task 10: Assignment Operators
// ======================================

let marks = 50;

marks += 10;
console.log(marks);

marks -= 5;
console.log(marks);

marks *= 2;
console.log(marks);

marks /= 5;
console.log(marks);

marks %= 4;
console.log(marks);

// ======================================
// Task 11: Comparison Operators
// ======================================

let x = 10;
let y = 20;

console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);

// ======================================
// Task 12: Logical Operators
// ======================================

let ageValue = 22;

console.log(ageValue > 18 && ageValue < 30);
console.log(ageValue > 25 || ageValue < 30);
console.log(!(ageValue > 18));

// ======================================
// Task 13: Increment & Decrement
// ======================================

let count = 10;

count++;
console.log(count);

count++;
console.log(count);

count--;
console.log(count);

// ======================================
// Challenge 1
// ======================================

let product = {
    productName: "Laptop",
    price: 55000,
    category: "Electronics",
    rating: 4.8
};

product.price = 50000;

console.log(product);

// ======================================
// Challenge 2
// ======================================

let cities = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Pune",
    "Hyderabad",
    "Jaipur",
    "Lucknow",
    "Chandigarh"
];

console.log(cities[0]);
console.log(cities[cities.length - 1]);

cities.push("Ambala");

console.log(cities.length);
console.log(cities);

// ======================================
// Challenge 3
// ======================================

// Variables

let myName = "Aman";
let myAge = 20;
let myCourse = "Full Stack Development";

// Object

let profile = {
    name: myName,
    age: myAge,
    course: myCourse,
    city: "Ambala"
};

// Array

let hobbies = [
    "Coding",
    "Reading",
    "Gaming"
];

console.log(myName);
console.log(myAge);
console.log(myCourse);

console.log(profile);

console.log(hobbies);

// ======================================
// Mini Project
// Student Profile Dashboard
// ======================================

let student = "Aman";
let studentAge2 = 20;
let studentCourse = "Full Stack Development";

let studentDetails = {
    name: student,
    age: studentAge2,
    course: studentCourse,
    city: "Ambala"
};

let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log("Student Name:", student);
console.log("Age:", studentAge2);
console.log("Course:", studentCourse);

console.log(studentDetails);

console.log(skills);

skills.push("React");
skills.push("NodeJS");

console.log("Updated Skills:", skills);