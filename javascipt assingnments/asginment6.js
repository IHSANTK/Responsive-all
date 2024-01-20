function findSecondLargestElement(arr) {
  

    let maxElement = arr[0];
    


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
           var seclarg = maxElement;
            maxElement = arr[i];
        } else if (arr[i] > seclarg && arr[i] !== maxElement) {
            seclarg = arr[i];
        }
    }

    return seclarg;
}

const myArray = [3, 7, 2, 10, 5, 15];
const secResult = findSecondLargestElement(myArray);
console.log("The second-largest element in the array is: " + secResult);

