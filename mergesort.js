function merge(firstArray, secondArray) {
  const finalArray = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < firstArray.length && index2 < secondArray.length) {
    if (firstArray[index1] < secondArray[index2]) {
      finalArray.push(firstArray[index1++]);
    } else {
      finalArray.push(secondArray[index2++]);
    }
  }

  return finalArray.concat(firstArray.slice(index1), secondArray.slice(index2));
}

function mergeSort(array) {
  if (array.length < 2) return array;

  const arrayMidpoint = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, arrayMidpoint);
  const secondHalf = array.slice(arrayMidpoint, array.length);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

const testArray = [4, 2, 6, 8, 1, 3, 5, 7];

console.log(mergeSort(testArray)); // [1, 2, 3, 4, 5, 6, 7, 8]
