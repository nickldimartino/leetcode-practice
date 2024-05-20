function isPalindrome(x: number): boolean {
    // return if the string type of the received number is equal to it's reverse form
    return x.toString() === x.toString().split("").reverse().join("");
};
