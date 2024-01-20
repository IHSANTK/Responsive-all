//Write a function to calculate the sum of all even numbers between 1 and n.



    function sumOfEvenNumbers(n) {
      
        let sum = 0;
      
        for (let i = 2; i <= n; i += 2) {
          sum += i;
        }
      
        return sum;
      }
      
     
      let n = 10;
      let result = sumOfEvenNumbers(n);
      console.log(`The sum of even numbers between 1 and ${n} is: ${result}`);
      



