function sumOfDigits(number) {

    const numStr = number.toString();

    // Initialize sum
    let sum = 0;

  
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    return sum;
}


const givenNumber = 12345;
const result = sumOfDigits(givenNumber);

console.log("Sum of digits of " + givenNumber + ": " + result);
