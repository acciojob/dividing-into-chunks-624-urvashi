const arr = [1, 2, 3, 4, 1, 0, 2, 2];

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
            SubArray = [arr[i]];
            currentSum = arr[i];
        }
    }

    if (SubArray.length > 0) {
        result.push(SubArray);
    }

    return result;
};

let n;

do {
    n = prompt("Enter n (or click Cancel to exit): ");
    if (n !== null) { // Check if the user didn't cancel the prompt
        n = Number(n); // Convert the input to a number
        if (!isNaN(n)) { // Check if the input is a valid number
            const output = divide(arr, n); // Call the divide function
            alert("Output: " + JSON.stringify(output)); // Show the output in an alert
        } else {
            alert("Please enter a valid number.");
        }
    }
} while (n !== null); // Continue until the user cancels