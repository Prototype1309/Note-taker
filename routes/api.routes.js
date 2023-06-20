const fs = require("fs");
const generateUniqueId = require("generate-unique-id");
const editNote = (updatedNotesArray) => {
  fs.writeFile("./db/db.json", JSON.stringify(updatedNotesArray), (err) => {
    if (err) throw err;
  });
};


// ROUTING
module.exports = (app) => {
  // GET REQUEST
  // Setup the /api/notes GET route
  app.get("/api/notes", (req, res) => {
    // Read the db.json file and return all saved notes as JSON.
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // Parse the JSON string into a JavaScript object
      res.json(JSON.parse(data));
    });
  });1