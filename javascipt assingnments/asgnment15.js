function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfPrimesUpToLimit(limit) {
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Example usage:
const givenLimit = 20;
const result = sumOfPrimesUpToLimit(givenLimit);

console.log("Sum of prime numbers up to " + givenLimit + ": " + result);

