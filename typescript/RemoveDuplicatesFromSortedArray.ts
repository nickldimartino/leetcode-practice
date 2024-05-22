function removeDuplicates(nums: number[]): number {
    // initialize the length of the array
    let len: number = nums.length;

    // initialize an index value to insert into the array
    let insertIdx: number = 1;

    // iterate over the received array
    for (let i: number = 1; i < len; i++) {
        // check if the element before the current one is the same
        if (nums[i-1] !== nums[i]) {
            // if not, set the insert index to the current value
            nums[insertIdx] = nums[i];

            // increment the insert index
            insertIdx++;
        }
    }

    // the value of the insert index is the number of unique elements
    return insertIdx;
};
