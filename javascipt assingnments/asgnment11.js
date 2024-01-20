function calculateFactorial(number) {
  
  
    
    if (number === 0) {
      return 1;
    }
  
    return number * calculateFactorial(number - 1);
  }
  

  const num = 5;
  const factorialResult = calculateFactorial(num);
  
  console.log(`Factorial of ${num} is: ${factorialResult}`); 
  