// let a = "Hello World!"
// let b = "Welcome to my website."

// console.log(a)
// console.log(b)

function sum(a, b){
    return a + b;
}

console.log(sum(5, 10));
// let a = 5;
// let b = 10;

// document.write("The sum of " + a + " and " + b + " is: " + sum(a, b))

function greet(name){
    return "Hello, " + name;
}

console.log(greet("Emmanuel"));

const divide = (a, b) => {
    console.log(a / b);
}

divide(10, 2);

// A Simple Calculator

const calculator = {

  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }

    return a / b;
  },

  squareRoot(number) {
    if (number < 0) {
      return "Invalid number";
    }

    return Math.sqrt(number);
  }

};

console.log("the sum of 5 and 10 is " + calculator.add(5, 10));
console.log("the difference of 10 and 5 is " + calculator.subtract(10, 5));
console.log("the product of 5 and 10 is " + calculator.multiply(5, 10));
console.log("the quotient of 10 and 2 is " + calculator.divide(10, 2));
console.log("the square root of 25 is " + calculator.squareRoot(25));

// 5 Function lists

function salute(){
    console.log("Hello, welcome to my website!");
}

salute();

function AreaOfCircle(radius){
    return Math.PI * radius * radius;
}
console.log("The area of a circle with radius 5 is: " + AreaOfCircle(5));

function areaOfRectrangle(l,w){
    return l*w;
}
console.log("The area of a rectangle with length 5 and width 10 is: " + areaOfRectrangle(5, 10));

function areaOfTriangle(b,h){
    return 0.5 *b*h;
}
console.log("The area of a triangle with base 5 and height 10 is: " + areaOfTriangle(5, 10));

function areaOfSquare(l){
    return l*l;
}

console.log("The area of a square with length 5 is: " + areaOfSquare(5));

// CONDITIONALS

let age = 32;
let isAdult = age >= 18;

if(age < 12) {
    console.log("You are a minor.");
} else if(age >= 12 && age < 18) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}

console.log("Is adult:", isAdult);