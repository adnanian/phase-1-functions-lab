// Code your solution in this file!

// Function 1 Solution
function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - startingBlock);
}

// Function 2 Solution
function distanceFromHqInFeet(blockNumber) {
    return feetPerBlock * distanceFromHqInBlocks(blockNumber);
}

// Function 3 Solution
function distanceTravelledInFeet(start, destination) {
    return feetPerBlock * Math.abs(destination - start);
}

// Function 4 Solution
function calculatesFarePrice(start, destination) {
    const distanceTraveled = distanceTravelledInFeet(start, destination);
    if (distanceTraveled <= 400) {
        return 0;
    } else if (distanceTraveled > 400 && distanceTraveled <= 2000) {
        return (distanceTraveled - 400) * 0.02;
    } else if (distanceTraveled > 2000 && distanceTraveled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

const startingBlock = 42;
const feetPerBlock = 264;
