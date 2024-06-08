/* 
Given a string s, find the length of the longest 
substring without repeating characters.
*/

function lengthOfLongestSubstring(s: string): number {
    // initialize length of received string
    const len: number = s.length;

    // if the received string is empty, there is no substring
    if (len === 0) return 0;

    // initialize array of substrings
    let subStrings: string[] = [];

    // initialize temporary substring
    let tempStr: string = "";

    // iterate over the received string to keep track of the start each substring
    for (let i: number = 0; i < len; i++) {
        // set the temporary substring to empty
        tempStr = "";

        // add the current iteration to the temporary substring
        tempStr += s[i];

        // iterate over the string after the start of each substring
        for (let j: number = i+1; j < len; j++) {
            // check if the temporary string already has the current iteration
            // if it doesn't, then add it
            // else the current substring is no longer valid
            if (!tempStr.includes(s[j])) {
                tempStr += s[j]
            } else {
                break;
            }
        }

        // add the current temporary string to the substring array
        subStrings.push(tempStr);
    }

    // set the max length substring to the first substring
    let maxLen: number = subStrings[0].length;

    // iterate of the substrings
    for (let k: number = 1; k < subStrings.length; k++) {
        // if the current iteration is longer than the current max length
        // then update the max length
        if (subStrings[k].length > maxLen) {
            maxLen = subStrings[k].length;
        }
    }

    // return the max length
    return maxLen;
};
