// Brute-Force Approach with O(n^2) 
function twoSum(nums: number[], target: number): number[] {
    // save the length of the array
    let len: number = nums.length;
    // iterate through the array 
    for (let i: number = 0; i < len; i++) {
        for (let j: number = i+1; j < len; j++) {
            // if the two numbers equal the target, return them
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    // return an empty array if two numbers don't equal the target
    return [];
};

// Hash Map Approach with O(n)
function twoSum(nums: number[], target: number): number[] {
    // initialize length of received array
    let len: number = nums.length;
    // initialize a new map to hash
    let numMap = new Map();
    // iterate over the received array
    for (let i: number = 0; i < len; i++) {
        // get the difference between the target num and current iteration
        let diff: number = target - nums[i];
        // if the hash map has the difference, return the indices of the values
        if (numMap.has(diff)) return [numMap.get(diff), i];
        // add the current iteration to the hash map
        numMap.set(nums[i], i)
    }
};
