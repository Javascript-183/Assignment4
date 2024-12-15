function fun(number, power) {
    let result = 1; 
    for (let i = 0; i < power; i++) {
        result *= number; 
    }
    return result; 
}
const number = 6;
const power = 3;
console.log(fun(number, power));
