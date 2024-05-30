function singleNumber(nums: number[]): number {
    // initialize value to XOR and return
    let retVal: number = 0;

    // iterate over the nums
    for (let num of nums) {
        // XOR the current iteration with the return value
        // if every number has a pair, then 0^0=0
        // if a number doesn't have a pair, then 0^1=1
        retVal ^= num;
    }

    // return the number that doesn't have a pair
    return retVal;
};
