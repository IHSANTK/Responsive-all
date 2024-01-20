function sumOfMultiples(limit) {
    let sum = 0;
    
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}


const givenNumber = 10;
const result = sumOfMultiples(givenNumber);

console.log("Sum of multiples of 3 or 5 below " + givenNumber + ": " + result);
