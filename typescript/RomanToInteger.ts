function romanToInt(s: string): number {
    // create a dictionary of roman numerals and their number equivalents
    const romanNumerals = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    }

    // initialized variables
    let convertedNumeral: number = 0;
    let len: number = s.length

    // iterate over the received string
    for (let i: number = 0; i < len; i++) {
        // save the current and next iteration value
        let currentVal: number = romanNumerals[s[i]];
        let nextVal: number = romanNumerals[s[i+1]];
        
        // if the current value is less than the next, subtract it from the converted Numeral
        // else add the current value to the converted numeral
        currentVal < nextVal ? convertedNumeral -= currentVal : convertedNumeral += currentVal;
    }

    return convertedNumeral;
};
