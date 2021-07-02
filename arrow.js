// First way of writing function
// function doubleIt(number) {
//     return number * 2;
// }

// second way of writing function
// const doubleIt = function(number) {
//     return number * 2
// }

// ES6 way of writing function
const doubleIt = number => number * 2
const addMultifly = (num1, num2) => (num1 + num2) * 2
const give5 = () => 5;
const BigFunction = (number1, number2) => {
    const sum = number1 + number2
    const diff = number1 - number2
    const result = sum * diff
    return result
}

const result = addMultifly(5, 10)
const result2 = give5()
const result3 = BigFunction(10, 5)
console.log(result);
console.log(result2);
console.log(result3);