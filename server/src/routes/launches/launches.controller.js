const { getAllLaunches, addNewLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (
        !launch.mission ||
        !launch.rocket ||
        !launch.launchDate ||
        !launch.destination
    ) {
        return res.status(400).json({
            error: "Missing required launch propery",
        });
    }

    //* json doesn't allow to pass data objects so we have to pass it as a string and convert it into a date while processing it in the API
    launch.launchDate = new Date(launch.launchDate);

    //* or if(launch.launchDate.toString() === "Invalid Date")
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: "Invalid launch date",
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
};

/*
launches is a map and not json, all we want is the values stored in our map i.e. the launch objects
*/

/*
const date = new Date("January 1, 2030")
isNaN(date) -> false

const notDate = newDate("hello")
isNaN(notDate) -> true

isNaN() -> calls automatically date.valueOf() to convert date to a number

so if we pass wrong date isNaN(date) is true, else false
*/
