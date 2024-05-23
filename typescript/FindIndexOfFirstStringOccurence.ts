function strStr(haystack: string, needle: string): number {
    // return the index of needle if it's in haystack or -1 if not
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};
