const http = require("http");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server Listening on PORT::${PORT}...`);
});

/* express is basically just a fancy listener function/middleware that we add on top our built in node http server */

/* any middleware or route handlers attached to app object will respond to requests coming in to our server */

/* using built in http server allows us to not only respond to http requests but also to other types of connections for eg. web sockets for real time communication  */

/* ORIGIN for our API & Frontend is different as origin includes Protocol, URL Hostname and PORT number & our server & client are running on different ports */
