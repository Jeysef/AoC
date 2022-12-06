// --- Day 6: Tuning Trouble ---

import { readFile } from "./utils"

const searchUniqueMarker = (input: string, markerLength: number) => {
    for (let [i,marker] = [0, ""]; i < input.length; i++) {
        const curr = input[i];
        if (!marker.includes(curr)) {
            marker += curr;
        }
        else {
            marker = marker.slice(marker.indexOf(curr) + 1) + curr;
        }
        if (marker.length === markerLength) {
            return { marker, i: i+1 };
        }
    }
}
const input = readFile("6");
// const testInput = "bvwbjplbgvbhsrlpgdmjqwftvncz"  // 5
// const testInput = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg" // 6


// part 1: How many characters need to be processed before the first start-of-packet marker is detected?
console.table(searchUniqueMarker(input, 4))

// part 2: How many characters need to be processed before the first start-of-message marker is detected?
console.table(searchUniqueMarker(input, 14))