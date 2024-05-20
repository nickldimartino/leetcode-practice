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
