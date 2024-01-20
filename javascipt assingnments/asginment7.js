function removeDuplicates(arr) {
   
    const uniqueSet = new Set(arr);
  

    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }
  
  
  const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1];
  const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
  console.log("Array with duplicates:", arrayWithDuplicates);
  console.log("Array without duplicates:", arrayWithoutDuplicates);
  