function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // use two variables to iterate over the arrays simultaneously
    for (let i: number = m, j: number = 0; j < n; i++, j++) {
        // with i starting at the the trailing zeroes, add the nums2 numbers
        nums1[i] = nums2[j];
    }

    // sort nums1 in non-decreasing order
    nums1.sort((a, b) => a - b);
};
