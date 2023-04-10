const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    target: "Kepler-442 b",
    customer: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
};

//* map launchDate to launch object
launches.set(launch.flightNumber, launch);

//> Functions to Access the Data, Controller doesn't needs to know the implementation details, only to use the data access functions

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(newLaunch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(newLaunch, {
            success: true,
            upcoming: true,
            customer: ["ZTM", "NASA"],
            flightNumber: latestFlightNumber,
        })
    );
}
/* we'll assign additional properties to our newLaunch object, if we have some properties which are already present, new value would override it, in the end Object.assign() will return a new object containing both the old and new properties */

module.exports = {
    getAllLaunches,
    addNewLaunch,
};
