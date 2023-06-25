// 2. Try to Build a Calculator 
// Try to build a calculator using javascript simple using if and else statements 


const a = parseInt( prompt("Enter the first number: "));
 operator = (prompt("Enter the operator (+, -, *, /): "));
const b = parseInt (prompt("Enter the second number: "));

if (operator == "+") {
    console.log(a + b);
}
else if (operator == "-") {
    console.log(a - b);
}
 else if (operator == "*") {
    console.log(a * b);
}
else if (operator == "/") {
    console.log(a / b);
}
else {
    console.log("Invalid operator");
}

