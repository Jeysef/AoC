// --- Day 3: Rucksack Reorganization ---

import { printForLine, readFileSplitted } from "./utils";
// part 1: get the sum of values of letters that are in both halves of the string

const getLetterValue = (letter: string) => {
    // Lowercase item types a through z have priorities 1 through 26.
    // Uppercase item types A through Z have priorities 27 through 52.
    if (letter === letter.toUpperCase()) {
        return letter.charCodeAt(0) - 64 + 26
    }
    return letter.charCodeAt(0) - 96
};

printForLine("input3", (line) => {
    // split line into half
    const half = line.length / 2;
    const firstHalf = line.slice(0, half);
    const secondHalf = line.slice(half);
    // get letter appears in each both half
    const firstHalfLetters = firstHalf.split("");
    const secondHalfLetters = secondHalf.split("");
    const commonLetter = firstHalfLetters.filter((letter) => secondHalfLetters.includes(letter))[0];
    // get letter value
    const letterValue = getLetterValue(commonLetter);
    
    return letterValue;
}, true)

// part 2: get the sum of values of letters that are in 3 following lines

printForLine("input3", (line, index, input) => {
    // every 3rd line
    if (index % 3 === 0) {
        // // get 3 lines
        const nextLine = input[index+1];
        const nextNextLine = input[index + 2];
        // // get letters of each line
        const letters = line.split("");
        const nextLineLetters = nextLine.split("");
        const nextNextLineLetters = nextNextLine.split("");
        // // get common letter
        const commonLetter = letters.filter((letter) => nextLineLetters.includes(letter) && nextNextLineLetters.includes(letter))[0];
        // // get letter value
        const letterValue = getLetterValue(commonLetter);
        // console.log(index, commonLetter, letterValue, letters.filter((letter) => nextLineLetters.includes(letter) && nextNextLineLetters.includes(letter)))
        return letterValue;
    }
    return 0;
}, true)
