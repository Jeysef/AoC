// --- Day 4: Camp Cleanup ---

import { readFileSplitted } from "./utils";

// part 1: In how many assignment pairs does one range fully contain the other?

const input = readFileSplitted('4');
const testInput = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
    "9-73,72-74",
]

console.log(
    [...input].map((line):number => {
        const [part1, part2] = line.split(',');
        const [part1start, part1end] = part1.split('-');
        const [part2start, part2end] = part2.split('-');
        // to number
        const p1s = parseInt(part1start);
        const p1e = parseInt(part1end);
        const p2s = parseInt(part2start);
        const p2e = parseInt(part2end);
        // get if part1 - part2 is fully contained in part3 - part4 or vice versa
        const isFullyContained = (p1s >= p2s && p1e <= p2e) || (p2s >= p1s && p2e <= p1e);
        // console.log("contained1", (part1start <= part2start && part1end >= part2end), "contained2", (part2start <= part1start && part2end >= part1end), "isFullyContained", isFullyContained);
        return isFullyContained ? 1 : 0;
    }).reduce((acc, curr) => acc + curr, 0)
)

// part 2: In how many assignment pairs does one range overlap the other?
console.log(
    [...input].map((line):number => {
        const [part1, part2] = line.split(',');
        const [part1start, part1end] = part1.split('-');
        const [part2start, part2end] = part2.split('-');
        // to number
        const p1s = parseInt(part1start);
        const p1e = parseInt(part1end);
        const p2s = parseInt(part2start);
        const p2e = parseInt(part2end);
        // get if part1 - part2 is overlap with part3 - part4 or vice versa
        const isOverlap = (p1s <= p2s && p1e >= p2s) || (p2s <= p1s && p2e >= p1s);
        return isOverlap ? 1 : 0;
    }).reduce((acc, curr) => acc + curr, 0)
)