function mySqrt(x: number): number {
    // initialize the lowest value
    let low: number = 0;
    // initialize the highest value as the received number
    let high: number = x;
    // the highest umber can't be lower than the lowest
    while (low <= high) {
        // find the middle value
        const mid: number = Math.floor((low + high) / 2);
        // find teh square of the middle number
        const square: number = mid * mid;
        // if the square is less than or equal to the received number
        if (square <= x) {
            // move the lowest number to just above the middle
            low = mid + 1;
        } else {
            // move the highest number to just below the middle
            high = mid - 1;
        }
    }
    // return the highest number
    return high;
};
