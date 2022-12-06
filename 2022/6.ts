// --- Day 6: Tuning Trouble ---

import { readFile } from "./utils"

// part 1: How many characters need to be processed before the first start-of-packet marker is detected?

const input = readFile("6");
// const testInput = "bvwbjplbgvbhsrlpgdmjqwftvncz"  // 5
// const testInput = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg" // 6

const markerLength = 4;
let marker = '';
let markerOutput = '';
let markerIndex = 0;
let markerFound = false;

[...input.split("")].reduce((acc: number, curr) => {
    if (markerFound) return acc;
    if (!marker.includes(curr)) {
        marker += curr;
    }
    else {
        marker = marker.slice(marker.indexOf(curr) + 1) + curr;
    }
    if (marker.length === markerLength) {
        markerOutput = marker;
        markerIndex = acc;
        markerFound = true;

    }
    // console.log(acc, curr, marker, markerOutput, markerIndex)
    return acc + 1;
}, 1)


console.log(markerOutput, markerIndex)

// part 2: How many characters need to be processed before the first start-of-message marker is detected?
const messageLength = 14;
let message = '';
let messageOutput = '';
let messageIndex = 0;
let messageFound = false;

[...input.split("")].reduce((acc: number, curr) => {
    if (messageFound) return acc;
    if (!message.includes(curr)) {
        message += curr;
    }
    else {
        message = message.slice(message.indexOf(curr) + 1) + curr;
    }
    if (message.length === messageLength) {
        messageOutput = message;
        messageIndex = acc;
        messageFound = true;

    }
    // console.log(acc, curr, message, messageOutput, messageIndex)
    return acc + 1;
}, 1)


console.log(messageOutput, messageIndex)