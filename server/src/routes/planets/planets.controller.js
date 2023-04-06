const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  //* it's better to use return whenever we set a response, so that our controller functions only ever the set the response only once, return value isn't used by express, it's just to make sure our function stops executing when response is set
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
};

/* it's better to use named functions here since if we encounter an error, node can display the name of the function which makes it easier for debugging, if it's not a named function or a arrow function assinged to a variable node won't display anything */
