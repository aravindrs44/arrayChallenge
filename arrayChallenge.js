//Challenge 1
function alwaysHungry(arr)  {
    var counter = 0;
    for (var i = 0; i < arr.length; i++)    {
        if (arr[i] == "food") {
            console.log("yummy");
            counter++;
        }       
    }
    if (counter < 1)    {
        console.log("I'm hungry");
    }
}

//Challenge 2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++)    {
        if (arr[i] > cutoff)    {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// Challenge 3
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)    {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0;
    for (var i = 0; i < arr.length; i++ )   {
        if (arr[i] > avg)   {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//Challenge 4
function reverse(arr) {
    var length = arr.length;
    var newArr = [];
    for (var i = 0; i < length; i++)    {
        newArr[i] = arr.pop();
    }
    return newArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

//Challenge 5
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i = 0; i < n - 2; i++) {
        var sum = fibArr[i] + fibArr[i+1];
        fibArr.push(sum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



