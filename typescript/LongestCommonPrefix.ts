function longestCommonPrefix(strs: string[]): string {
    // return empty string if the array is empty
    if (strs.length == 0) return "";

    // set the prefix to the first one because if one fails, they all fail
    let prefix = strs[0];

    // length of the received array
    const len: number = strs.length;

    // iterate over the received array
    for (let i = 0; i < len; i++) {
        
        // while the index of the prefix is present in the first string
        while (strs[i].indexOf(prefix) != 0) {

            // get the chars of the prefix between zero and the prefix length
            prefix = prefix.substring(0, prefix.length-1);

            // return empty string if the prefix value is empty
            if (prefix === null) return ""
        }
    }
    return prefix;
};
