function addBinary(a: string, b: string): string {
    // convert both strings to binary and add them as two BigInts
    // convert the resulting BigInt to a string with radix 2
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
