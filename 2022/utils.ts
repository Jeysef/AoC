// @ts-nocheck
export const splitLines = (text: string) => text.split('\n');

export const splitSpaces = (text: string) => text.split(' ');

import fs from 'fs';
import path from 'path';

export const readFile = (name: string): string => fs.readFileSync(path.join(__filename, `../${name}.txt`), 'utf8').trim();
export const readFileSplitted = (name: string | number): string[] => fs.readFileSync(path.join(__filename, `../${name}.txt`), 'utf8').trim().split('\r\n');

export const printForLine = (name: string, callbackfn: (value: string, index: number, array: string[]) => any, sum?: boolean) => console.log(sum? [...readFileSplitted(name)].map(callbackfn).reduce((acc, curr) => acc + curr, 0) : [...readFileSplitted(name)].map(callbackfn));