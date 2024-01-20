function calculateSum(numbers) {
   
    return numbers.reduce((num, sum) => num + sum, 0);
  }
  
 
  const numberArray = [1, 2, 3, 4, 5];
  const sum = calculateSum(numberArray);
  
  console.log(sum); 
  