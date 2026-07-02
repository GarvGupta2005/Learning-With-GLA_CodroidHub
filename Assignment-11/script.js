// ======================================
// Section A: Conditional Statements
// ======================================

// Q1. Voting Eligibility Checker

let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// --------------------------------------
// Q2. ATM Withdrawal System

let balance = 1500;

if (balance >= 1000) {
    console.log("Withdrawal Allowed");
} else {
    console.log("Insufficient Balance");
}

// --------------------------------------
// Q3. Temperature Checker

let temp = 30;

if (temp > 35) {
    console.log("Hot");
} else if (temp >= 20 && temp <= 35) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}

// --------------------------------------
// Q4. Grade Calculator

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// --------------------------------------
// Q5. Age Category Program

let ageCategory = 25;

if (ageCategory < 13) {
    console.log("Child");
} else if (ageCategory <= 19) {
    console.log("Teenager");
} else if (ageCategory <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// ======================================
// Section B: Loops
// ======================================

// Q6. Print Numbers 1 to 20

console.log("Numbers 1 to 20");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// --------------------------------------
// Q7. Even Numbers 1 to 50

console.log("Even Numbers");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

// --------------------------------------
// Q8. Odd Numbers 1 to 50

console.log("Odd Numbers");

for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}

// --------------------------------------
// Q9. Multiplication Table of 8

console.log("Table of 8");

for (let i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}

// --------------------------------------
// Q10. Student Roll Numbers

console.log("Student Roll Numbers");

for (let i = 101; i <= 120; i++) {
    console.log("Student Roll No:", i);
}

// ======================================
// Section C: Pattern Programs
// ======================================

// Q11. Star Pattern

console.log("Q11");

console.log("*****");

// --------------------------------------
// Q12. Square Pattern

console.log("Q12");

for (let i = 1; i <= 5; i++) {
    console.log("*****");
}

// --------------------------------------
// Q13. Right Triangle

console.log("Q13");

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// --------------------------------------
// Q14. Reverse Triangle

console.log("Q14");

for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}

// --------------------------------------
// Q15. Number Triangle

console.log("Q15");

for (let i = 1; i <= 5; i++) {
    let output = "";

    for (let j = 1; j <= i; j++) {
        output += j;
    }

    console.log(output);
}

// --------------------------------------
// Q16. Repeating Number Pattern

console.log("Q16");

for (let i = 1; i <= 5; i++) {
    console.log(String(i).repeat(i));
}

// --------------------------------------
// Q17. Pyramid Pattern

console.log("Q17");

for (let i = 1; i <= 5; i++) {
    let spaces = " ".repeat(5 - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

// --------------------------------------
// Q18. Inverted Pyramid

console.log("Q18");

for (let i = 5; i >= 1; i--) {
    let spaces = " ".repeat(5 - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

// ======================================
// Section D: Real World Logic
// ======================================

// Q19. Login System

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome User");
} else {
    console.log("Please Login");
}

// --------------------------------------
// Q20. Shopping Discount

let cartValue = 5500;

if (cartValue > 5000) {
    console.log("20% Discount");
} else if (cartValue > 3000) {
    console.log("10% Discount");
} else {
    console.log("No Discount");
}

// --------------------------------------
// Q21. Battery Alert

let battery = 15;

if (battery < 20) {
    console.log("Low Battery");
} else {
    console.log("Battery OK");
}

// --------------------------------------
// Q22. Password Attempts

for (let i = 1; i <= 5; i++) {
    console.log("Attempt", i);
}

// ======================================
// Bonus Challenge
// ======================================

// Q23. Diamond Pattern

console.log("Diamond Pattern");

// Upper Half

for (let i = 1; i <= 5; i++) {
    let spaces = " ".repeat(5 - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

// Lower Half

for (let i = 4; i >= 1; i--) {
    let spaces = " ".repeat(5 - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

// --------------------------------------
// Q24. FizzBuzz

console.log("FizzBuzz");

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }

}