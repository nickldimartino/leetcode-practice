function searchInsert(nums: number[], target: number): number {  
    // initialize the length of the received array
    let len: number = nums.length;

    // if the target value is greater than the max value, return the next index
    if (nums[len-1] < target) return len;

    // if the target value is less than the min value, return the first index
    if (nums[0] > target) return 0;

    // if the array contains the target, return the index
    if (nums.includes(target)) return nums.indexOf(target);

    // iterate over the received array
    for (let i: number = 0; i < len; i++) {
        // if the current value is greater than target, return the current index
        if (nums[i] > target) return i;
    } 

    // invalid location or target 
    return -1;
};
