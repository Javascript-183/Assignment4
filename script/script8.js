function blankStringChecker(testString) {
    if (testString.trim().length === 0) {
        return "This string is blank";
    } else {
        return "This string is not blank";
    }
}
const string1 = "   "; 
const string2 = "Hello, World!"; 
console.log(blankStringChecker(string1)); 
console.log(blankStringChecker(string2)); 
