function findUnion(array1, array2) {
 
    const unionSet = new Set([...array1, ...array2]);

  
    const unionArray = Array.from(unionSet);

    return unionArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const unionResult = findUnion(array1, array2);

console.log("Union of arrays:", unionResult);
