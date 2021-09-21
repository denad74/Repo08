// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
// Only change code above this line
console.log(randomRangeNumber(3, 9));

module.exports = randomRangeNumber;
