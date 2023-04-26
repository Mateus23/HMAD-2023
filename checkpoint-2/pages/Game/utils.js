import { MINIMUM_SEQUENCE } from "./constants";

export const sleep = (ms) => new Promise(r => {
    return setTimeout(r, ms)
})

const getRandomNumber = (range) => {
    return Math.floor(Math.random() * range);
}

export const getRandomSequence = (range, oldSequence) => {
    const newSequence = Array.from(oldSequence)
    const newLength = Math.max(oldSequence.length + 1, MINIMUM_SEQUENCE);
    for (let i = newSequence.length; i < newLength; i++){
        newSequence.push(getRandomNumber(range))
    }
    return newSequence;
}