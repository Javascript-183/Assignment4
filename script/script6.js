function factorialCalculator(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i; 
    }
    return factorial;
}
const number = 5;
console.log(`${number}! = ${factorialCalculator(number)}`);
