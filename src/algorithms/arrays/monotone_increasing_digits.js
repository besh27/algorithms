/*
Find the longest monotone sub-array from an array of numbers.
Monotone sub-array is a sequence of elements where each element is bigger than the previous one.
*/

/* 
    Notes: Monotonic means a set of numbers is always increasing or decreasing
           If a sequence fluxuates between increasing and decreasing, it is not a monotone, expecially
           If there is no identifiable pattern that shows the data going in one direction.

    How do we do this?
        a.  The idea is to go from the Lowest Significant Bit to most significant bit 
            and find the last digit, where an inversion happens.
    
    Scenero 1:
        In 14267 , we see that inversion happens at 4. In this case, then answer is obtained by reducing 4 to 3, and changing all the following digits to 9.
        => 13999

    Scenero 2:
        1444267, here eventhough the last inversion happens at the last 4 in 1444, 
        if we reduce it to 3, then that itself breaks the rule. So once we find the last digit where inversion happens, 
        if that digit is repeated, then we have to find the last position of that digit. 
        After that it is same as case1, where we reduce it by 1 and set the remaining digits to 9.
        => 1399999        
*/

const monotoneIncreasingDigits = (num) => {
    // Convert n into num array in reverse order
    var numStr = '' + num;
    // peak is????
    var peak;

    // Find the leftmost position that is inverted and if the inverted character repeats itself, find the leftmost repeated digit.   
    for (var i = 0; i < numStr.length - 1; i++) {
        if (numStr[i] > numStr[i+1]) {
            peak = i;
            break;
            console.log(`The num is currently ${num}, the peak is ${peak} and the array looks like ${numStr}`);
        }
    }
    if (peak === undefined) return num;

    while (
        peak > 0 && numStr[peak] === numStr[peak-1]
    ) peak;
    console.log(`The num is currently ${num}, the peak is ${peak} and the array looks like ${numStr}`);
    // Reduce the digit that caused the inversion by 


    // result = the first value tot he peak value.
    var result = numStr.substring(0, peak);
    console.log(`The result looks like this before: ${result}`)
    result += (parseInt(numStr[peak]) - 1);
    console.log(`The result looks like this after: ${result}`)
    // Fill the digits after inversion as 9
    for (var i = peak + 1; i < numStr.length; i++) {
        result += '9';
    }
    console.log(`The numStr looks like this after: ${numStr}`)
    console.log(`The result looks like this after: ${result}`)
    // Reverse back the num array and convert to int
    return parseInt(result, 10);
};

// const numbers = [1, 10, 12, 3, 4, 5, 2, 7, 3, 14, 2];

// monotoneIncreasingDigits(numbers);

export default monotoneIncreasingDigits;
