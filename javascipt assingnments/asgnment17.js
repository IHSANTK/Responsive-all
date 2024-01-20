function sumOfEvenOrOddNumbers(limit, isEven) {
    let sum = 0;
    
    for (let i = 1; i < limit; i++) {
        if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0)) {
            sum += i;
        }
    }

    return sum;
}


const givenNumberEven = 10;
const resultEven = sumOfEvenOrOddNumbers(givenNumberEven, true);

console.log("Sum of even numbers below " + givenNumberEven + ": " + resultEven);



const resultOdd = sumOfEvenOrOddNumbers(givenNumberEven, false);

console.log("Sum of odd numbers below " + givenNumberEven+ ": " + resultOdd);
