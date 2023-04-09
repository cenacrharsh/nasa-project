const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
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

module.exports = {
  getAllLaunches,
};
