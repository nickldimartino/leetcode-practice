function lengthOfLastWord(s: string): number {
    // remove the surrounding whitespace in the string and spliut each word
    let str: string[] = s.trim().split(" ");

    // return the length of the alst element in the array
    return str[str.length-1].length;
};
