function isValid(s: string): boolean {
    // initialize length of received string
    const len: number = s.length;

    // the first character of the string shouldn't be a closed bracket
    // the last character of the string shouldn't be an open bracket
    if (s[0] === ")" || s[0] === "]" || s[0] === "}") return false;
    if (s[len-1] === "(" || s[len-1] === "[" || s[len-1] === "{") return false;

    // initialize empty array for bracket stack and bracket
    const brackets: string[] = [];
    let b: string;

    // iterate through the received string
    for (let i: number = 0; i < len; i++) {  
        // push an opening bracket to the stack
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') { 
            brackets.push(s[i]); 
        } 

        // if the brackets stack is still empty, return false
        if (brackets.length === 0) return false; 

        // check the current bracket character
        // push it and check if the bracket popped was the correct bracket
        switch (s[i]) {
            case ')': 
                b = brackets.pop(); 
                if (b === '{' || b === '[') return false; 
                break; 
            case '}': 
                b = brackets.pop(); 
                if (b === '(' || b === '[') return false; 
                break; 
            case ']': 
                b = brackets.pop(); 
                if (b === '(' || b === '{') return false; 
                break; 
        } 
        
    } 

    // return true if there were an equal amount of open and closed brackets
    return (brackets.length === 0);
};
