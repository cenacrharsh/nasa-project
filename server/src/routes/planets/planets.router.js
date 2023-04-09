const express = require("express");

const planetsRouter = express.Router();

const { httpGetAllPlanets } = require("./planets.controller");

planetsRouter.get("/planets", httpGetAllPlanets);

module.exports = planetsRouter;

/* Router is just another type of middleware that groups together related routes */
