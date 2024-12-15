
const names = ["John", "Bob", "Nick", "Mary", "Bob", "Sue", "Bob", "Ann"];
const newNames = [];
for (let i = 0; i < names.length; i++) {
    if (names[i] !== "Bob") { 
        newNames.push(names[i]);
    }
}
console.log(newNames);


const names1 = ["John", "Bob", "Nick", "Mary", "Bob", "Sue", "Bob", "Ann"];

const newNames1 = names1.filter(name => name !== "Bob");

console.log(newNames1);