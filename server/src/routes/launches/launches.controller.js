const { getAllLaunches } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches);
}

module.exports = { httpGetAllLaunches };

/*
launches is a map and not json, all we want is the values stored in our map i.e. the launch objects
 */
