const express = require("express");

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Sets up the Express app to handle data parsing for POST and PUT requests, because in both these requests you are sending data to the server and you are asking the server to accept or store that data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to serve static files
app.use(express.static("public"));

// ROUTER
// The below points our server to a series of "route" files.
require("./routes/api.routes")(app);
require("./routes/html.routes")(app);
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// LISTENER
app.listen(PORT, () =>
  console.log(`Express server currently running on port: ${PORT}`)
);
