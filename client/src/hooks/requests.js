const API_URL = "http://localhost:8000";

//> Load planets and return as JSON
async function httpGetPlanets() {
    //* fetch function returns a promise
    const response = await fetch(`${API_URL}/planets`);

    //* json() function also returns a promise so we await it before we return
    return await response.json();
}

//> Load launches, sort by flight number, and return as JSON
async function httpGetLaunches() {
    const response = await fetch(`${API_URL}/launches`);

    const fetchedLaunches = await response.json();

    return fetchedLaunches.sort((a, b) => {
        return a.flightNumber - b.flightNumber;
    });
}

//! Submit given launch data to launch system
async function httpSubmitLaunch(launch) {
    //* if entire request fails i.e. maybe server isn't responding or network is down and we can't connect to server, response status code won't be set as server isn't responding, and rather than response.ok being set to false our fetch func will throw an error which we'll catch using try catch block
    try {
        return await fetch(`${API_URL}/launches`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(launch),
        });
    } catch (err) {
        //* will trigger our condition in useLaunches.js
        //* will simulate same behaviour if we got a 400 response
        return {
            ok: false,
        };
    }
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
