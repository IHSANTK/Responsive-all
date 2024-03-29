function isPrime(num) {
   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}


const limit = 30;
const primeNumbers = findPrimes(limit);
console.log(`Prime numbers up to ${limit}:`, primeNumbers);
