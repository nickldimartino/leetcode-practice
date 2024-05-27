function plusOne(digits: number[]): number[] {
    // convert the digits array to a string with the BigInt value incremented
    let incrementedNum: string = (BigInt(digits.join(""))+1n).toString()
    // initialize the length of the number
    let len: number = incrementedNum.length;
    // initialize an array
    let retNum: number[] = [];
    // iterate over the big int string
    for (let i: number = 0; i < len; i++) {
        // push each value into an array as a number
        retNum.push(Number(incrementedNum[i]));
    }
    // return the resulting array
    return retNum;
};
