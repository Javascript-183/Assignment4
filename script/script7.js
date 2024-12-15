function capitalizeFirstLetter(string) {
  if (string.length === 0) {
    return "";
  }
  return string[0].toUpperCase() + string.slice(1);
}
const inputString = "new year";
console.log(capitalizeFirstLetter(inputString));
