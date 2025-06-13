
function max(arr) {
  if (arr.length === 0) {
    return null; // Handle empty array case
  }
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

let arr = [1, 2, 3, 4, 5];
console.log(max(arr))
