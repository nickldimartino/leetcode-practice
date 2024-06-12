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
    // initalized variables
    const len: number = nums.length;
    let numMap = new Map();
    let i: number = 0;

    // iterate over recieved aray
    for (i; i < len; i++) {
        // compute difference
        let diff: number = target - nums[i];

        // if the map has the difference equivalent, return the two indices
        if (numMap.has(diff)) return [numMap.get(diff), i];

        // add the current iteration to the map
        numMap.set(nums[i], i)
    }

    // return empty array if no values were found
    return [];
};
