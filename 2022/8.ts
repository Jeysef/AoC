// --- Day 8: Treetop Tree House ---

import { readFileSplitted } from "./utils";

// part 1: return count of visible trees

// given grid of numbers
// if number above, below, left, right is none or none or smaller than current number, current number is visible
// return array of same size as input with values true as visible anf false as hidden

const input = readFileSplitted("8").map(line => line.split("").map(e => parseInt(e)))

interface IPosition {
    i: number
    j: number
    value: number
}

class Position {
    i: number;
    j: number;
    value: number;
    private thresholds: (number | null)[];
    visible: null | boolean;
    sight: (number | null)[];
    constructor(params: IPosition) {
        this.i = params.i
        this.j = params.j
        this.value = params.value
        this.thresholds = [null, null, null, null] // top, left, bottom, right
        this.sight = [null, null, null, null] // top, left, bottom, right
        this.visible = null
    }

    getNeighbor(direction: number, output: Position[][]): Position | null {
        const { i, j } = this
        switch (direction) {
            case 0: // top
                return i > 0 ? output[i - 1][j] : null
            case 1: // left
                return j > 0 ? output[i][j - 1] : null
            case 2: // bottom
                return i < output.length - 1 ? output[i + 1][j] : null
            case 3: // right
                return j < output[i].length - 1 ? output[i][j + 1] : null
            default:
                return null
        }
    }

    setVisibility(visible: boolean, neighbor: Position | null, direction: number): void {
        this.visible = this.visible || visible
        this.thresholds[direction] = neighbor ? neighbor.getThreshold(direction) : 0
    }
    getThreshold(direction: number): number {
        return Math.max(this.thresholds[direction] ?? 0, this.value)
    }
    getSight(direction: number): number {
        return this.sight[direction] ?? 0 // should never be null
    }
    getSightScore(): number {
        // multiply sight in each direction
        return this.sight.map(e => e?? 0).reduce((a, e) => a * (e ?? 0), 1)
    }
}

const treesLogic = ([i,j]: number[], output: Position[][]) => {
    for (let direction = 0; direction < 4; direction++) {
        const current = direction < 2 ? output[i][j] : output[input.length - 1 - i][input[i].length - 1 - j]
        const neighbor = current.getNeighbor(direction, output)
        // check all neighbors until one is bigger or same or none, return how many were smaller + 1
        let sight = 0
        let sightNeighbor = neighbor
        // yeah, I don't like this while loop, but I couldn't find a better way. I'm sure there is one
        while (true) {
            if (!sightNeighbor) {
                current.sight[direction] = sight
                break
            }
            if (sightNeighbor.value >= current.value) {
                current.sight[direction] = sight + 1
                break
            }
            sight++
            sightNeighbor = sightNeighbor.getNeighbor(direction, output)
        }
        if (!neighbor) {
            current.setVisibility(true, neighbor, direction)
            continue
        }
        if (current.value <= neighbor.getThreshold(direction)) {
            current.setVisibility(false, neighbor, direction)
        } else {
            current.setVisibility(true, neighbor, direction)
        }
    }
}

const trees = (input: number[][]) => {
    const output: Position[][] = [...input].map((row, i) => row.map((value, j) => new Position({ i, j, value })))
    output.forEach((row, i) => row.forEach((value, j) => treesLogic([i, j], output)))
    return output
}


// reduce output to number of visible items
const output = [...trees(input)]
console.log(output.reduce((a, e) => a.concat(e), []).reduce((a, e) => a + (e.visible ? 1 : 0), 0))

// part 2: return number of max visible trees

// get highest sight score
console.log(output.reduce((a, e) => a.concat(e), []).reduce((a, e) => Math.max(a, e.getSightScore()), 0))
