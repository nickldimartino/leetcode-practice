function isPalindrome(s: string): boolean {
    // convert the recevied string to lower case and remove all non-alphanumerica chars
    let str: string  = s.toLowerCase().replace(/[^0-9a-z]+/gi, "");

    // check if the string is a palindrome
    return str === str.split("").reverse().join("");
};
