// Code your solution in this folder
// Return First Two Drivers
 const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
 };

 const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
 const firstTwoDrivers = returnFirstTwoDrivers(driversArray);

console.log(firstTwoDrivers);

// Returns Last Two Drivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const lastTwoDrivers = returnLastTwoDrivers(driversArray);
console.log(lastTwoDrivers);

// Selecting Drivers
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];



// Fare Multiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare*multiplier;
    };
};



// FareDoubler

const fareDoubler = createFareMultiplier(2); 


// FareTripler

const fareTripler = createFareMultiplier(3);

// Selecting Different Drivers

function selectDifferentDrivers(driversArray, selectingFunction) {
    return selectingFunction(driversArray);
};


