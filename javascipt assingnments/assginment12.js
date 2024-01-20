function isPalindrome(str) {
  
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
   
   

    return cleanStr === cleanStr.split('').reverse().join('');
}


const testString1 = "A man, a plan, a canal, Panama!";
const testString2 = "Hello, World!";


console.log(isPalindrome(testString1)); 
console.log(isPalindrome(testString2));

