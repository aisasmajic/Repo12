// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (endN - startN === 0) {
      return [startN];
    } 
      var numbers = rangeOfNumbers(startN, endN - 1);
      numbers.push(endN);
      return numbers;
  }
// Only change code above this line
console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10)); 
console.log(rangeOfNumbers(5, 5)); 
console.log(rangeOfNumbers(7, 5)); 
module.exports = rangeOfNumbers;