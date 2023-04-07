const path = require("path");

// allows us to open files as a readable stream which is a kind of event emitter which emits various named events depending on what's currently happening in the file
const fs = require("fs");

// function parse returns an event emitter that deals with streams of data coming in from the file, but this function doesn't deals with files directly, it only knows about streams hence we use inbuilt "fs" module
const { parse } = require("csv-parse");

const isHabitablePlanet = (data) => {
  return (
    data["koi_disposition"] === "CONFIRMED" &&
    data["koi_insol"] > 0.36 &&
    data["koi_insol"] < 1.11 &&
    data["koi_prad"] < 1.6
  );
};

const habitablePlanets = [];

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    //* we pipe a readable stream (here createReadStream()) to a writeable stream (here parse())
    //* readable.pipe(writeable)
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true, // returns data as array of js objects with key value pairs instead of array of values in a row
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log("Error occured while reading file");
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanets.length} Habitable Planets Found !!!`);
        // console.log(
        //   habitablePlanets.map((planet) => {
        //     return planet["kepler_name"];
        //   })
        // );
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};

/* we are using streams, and node won't wait for any of our stream code to complete before it returns our module exports => we'll use promises and we will wait for promise to resolve before accepting any incoming req in controller */
