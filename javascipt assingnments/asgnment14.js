function fibonacciSeries(numTerms) {
    let fibSeries = [];
    
    for (let i = 0; i < numTerms; i++) {
        if (i <= 1) {
            fibSeries.push(i);
        } else {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
    }

    return fibSeries;
}

// Example usage:
const numberOfTerms = 10;
const result = fibonacciSeries(numberOfTerms);

console.log("Fibonacci Series up to " + numberOfTerms + " terms: " + result.join(', '));
