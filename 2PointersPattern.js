// 1. Sum of Two
// Problem: Given a sorted array of numbers and a target sum, determine if there are two numbers in the array that add up to the target.
// Example:
// Input: arr = [1, 2, 3, 4, 6], target = 6
// Output: true  // (2 + 4 = 6)
// Approach: Use two pointers, one at the beginning and one at the end, and move them inward based on the sum.
// let arr = [1, 2, 3, 4, 5, 6]; 
// let left = 0;
// let right = arr.length - 1;
// let target = 6;

// while (left < right) {
//     const sum = arr[left] + arr[right];

//     if (sum === target) {
//         console.log(arr[left], arr[right]);  // Log the pair that adds up to the target
//         return true;
//     } else if (sum < target) {
//         left++;  // Move the left pointer right to increase the sum
//     } else {
//         right--;  // Move the right pointer left to decrease the sum
//     }
// }

// // If no pair found, return false
// return false;



// Problem: Find Indices of Two Numbers Adding up to Target
// Description: Given a sorted array of integers, find the indices (1-based) of two numbers such that they add up to a specific target. You may assume that each input has exactly one solution, and you cannot use the same element twice.

// Example:
// Input: arr = [2, 7, 11, 15], target = 9
// Output: [1, 2]  // Because arr[0] + arr[1] = 2 + 7 = 9

// let arr = [2, 7, 11, 15];
// let target = 9;
// let left = 0;
// let right = arr.length - 1;
// function indicesEqualToTarget() {

// while(left < right) {
//     const sum = arr[left] + arr[right];
//     if(sum === target) {
//         left++;
//         right++
//         console.log(left, right)
//         return true;
//     } else if (sum < target) {
//         left++;
//     } else if(sum > target) {
//         right--;
//     }
// }
// return false;
// }
// console.log(indicesEqualToTarget());


// Problem: Count Pairs with Target Sum
// Description: Given a sorted array of integers, count the number of unique pairs of elements that sum up to a given target. Each pair should only be counted once, and you should not use the same element twice in a pair.

// Input: arr = [1, 2, 3, 4, 5, 6], target = 7
// Output: 3  // The pairs are (1, 6), (2, 5), and (3, 4)

// Input: arr = [1, 1, 2, 2, 3, 3], target = 4
// Output: 2  // The pairs are (1, 3) and (2, 2)

function findingIndices(arr, target) {
    let left = 0;
    let right = arr.length - 1;
   let count = 0;
    while(left < right) {
     const sum = arr[left] + arr[right];
        if(sum === target) {
            count++;
            console.log(count)
        } else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}
console.log(findingIndices([1, 2, 3, 4, 5, 6], 7));