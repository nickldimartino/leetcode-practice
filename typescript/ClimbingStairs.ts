function climbStairs(n: number): number {
    // the values 1, 2, and 3 would return their numbers
    if (n === 1 || n === 2 || n === 3) return n;

    // initialize starting variables
    let first: number = 1;
    let second: number = 2;
    let third: number = 0;

    // iterate over the nuber of steps
    for (let i: number = 2; i < n; i++) {
        // current iteration will always be the sum of the last two
        third = first + second;

        // increment the last two numbers
        first = second;
        second = third;
    }

    // return the most recent iteration
    return third;
};
