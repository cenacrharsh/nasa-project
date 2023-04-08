const { launches } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

module.exports = { getAllLaunches };

/*
launches is a map and not json, all we want is the values stored in our map i.e. the launch objects
 */
