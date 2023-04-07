const express = require("express");
const path = require("path");

const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

//! Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;

/* ORIGIN for our API & Frontend is different as origin includes Protocol (http://), URL Hostname (localhost) and PORT number (3000) & our server & client are running on different ports */
