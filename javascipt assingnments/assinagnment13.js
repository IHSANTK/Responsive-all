function isArmstrongNumber(number) {
  
    const numStr = number.toString();
    const numDigits = numStr.length;

    // Calculate the sum of each digit raised to the power of the number of digits
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(numStr[i]), numDigits);
    }

  
    return sum === number;
}


const testNumber1 = 153;
const testNumber2 = 371;
const testNumber3 = 1634;

console.log(isArmstrongNumber(testNumber1)); // Output: true
console.log(isArmstrongNumber(testNumber2)); // Output: true
console.log(isArmstrongNumber(testNumber3)); // Output: true
