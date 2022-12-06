// --- Day 5: Supply Stacks ---

import { readFileSplitted } from "./utils"


//                         [Z] [W] [Z]
//         [D] [M]         [L] [P] [G]
//     [S] [N] [R]         [S] [F] [N]
//     [N] [J] [W]     [J] [F] [D] [F]
// [N] [H] [G] [J]     [H] [Q] [H] [P]
// [V] [J] [T] [F] [H] [Z] [R] [L] [M]
// [C] [M] [C] [D] [F] [T] [P] [S] [S]
// [S] [Z] [M] [T] [P] [C] [D] [C] [D]
// 1   2   3   4   5   6   7   8   9 

// structure above as object with key as position and value as string of letters
var startingStacks: { [key: number]: string[] } = {
    1: ['N', 'V', 'C', 'S'],
    2: ['S', 'N', 'H', 'J', 'M', 'Z'],
    3: ['D', 'N', 'J', 'G', 'T', 'C', 'M'],
    4: ['M', 'R', 'W', 'J', 'F', 'D', 'T'],
    5: ['H', 'F', 'P'],
    6: "JHZTC".split(''),
    7: "ZLSFQRPD".split(''),
    8: "WPFDHLSC".split(''),
    9: "ZGNFPMSD".split(''),
}



// part 1: print top of each stack as: "ZWZJLPGNP"
// readFileSplitted('5').forEach((line) => {
//     // delete text
//     const newLine = line.replace(/(move |from |to )/g, "")
//     const [count, stackFrom, stackTo] = newLine.split(' ');
//     const sf = parseInt(stackFrom);
//     const st = parseInt(stackTo);
//     console.log("count", count, "stackFrom", stackFrom, "stackTo", stackTo);
//     // for count times take top of stackFrom and put it on top of stackTo
//     for (let i = 0; i < parseInt(count); i++) {
//         const top = startingStacks[sf].shift()!;
//         startingStacks[st].unshift(top);
//     }
    
// })
// console.log(Object.values(startingStacks).map((stack) => stack[0]).join(''));

// part 2: same as part 1 but move count items at once 
readFileSplitted('5').forEach((line) => {
    // delete text
    const newLine = line.replace(/(move |from |to )/g, "")
    const [count, stackFrom, stackTo] = newLine.split(' ');
    const sf = parseInt(stackFrom);
    const st = parseInt(stackTo);
    console.log("count", count, "stackFrom", stackFrom, "stackTo", stackTo);
    // take count items out ot top of stackFrom and put it on top of stackTo
    const top = startingStacks[sf].splice(0, parseInt(count));
    startingStacks[st].unshift(...top);

    
})
// part 1: print top of each stack as: "ZWZJLPGNP"
console.log(Object.values(startingStacks).map((stack) => stack[0]).join(''));