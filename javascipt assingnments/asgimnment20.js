function countVowels(inputString) {
   
    const lowerCaseString = inputString.toLowerCase();

    
    const vowels = ['a', 'e', 'i', 'o', 'u'];

   
    let vowelCount = 0;

    
    for (let char of lowerCaseString) {
        
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}


const givenString = "Hello, World!";
const result = countVowels(givenString);

console.log("Number of vowels in '" + givenString + "': " + result);
