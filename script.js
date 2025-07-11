const divide = (arr, n) => {
    const result = [];
    let SubArray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            SubArray.push(arr[i]);
            currentSum += arr[i];
        } else {
            result.push(SubArray);
            SubArray = [arr[i]]; // Start new subarray with the current element
            currentSum = arr[i]; // Reset current sum
        }
    }

    // Push the last subarray if it has elements
    if (SubArray.length > 0) {
        result.push(SubArray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));