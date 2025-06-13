function min(arr){
    if(arr.length === 0){
        return null;
    }
    let minValue = +Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minValue){
            minValue = arr[i];
            arr[i] = minValue;
        }
    }
    return minValue;

}
let arr = [1, 2, 3, 4, 5];
console.log(min(arr)); // Output: 1