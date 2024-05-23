function removeElement(nums: number[], val: number): number {
    // iterate over the received array
    for (let i: number = 0; i < nums.length;) {
        // if the current value is equal to the received value, remove it
        // else go to the next iteration
        // splicing will change the current indexed element, which we don't want
        nums[i] === val ? nums.splice(i, 1) : i++;
    }

    // return the new length of the nums array
    return nums.length;
};
