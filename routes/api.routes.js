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
  });
    // POST REQUEST
  // Setup the /api/notes post route
  app.post("/api/notes", (req, res) => {
    // Receives a new note, adds it to the db.json file, returns the new note to the client
    const newNote = req.body;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // Parse the JSON string into a JavaScript object
      const notesArr = JSON.parse(data);
      newNote.id = generateUniqueId({ length: 10 });
      notesArr.push(newNote);

      editNote(notesArr);
      console.log(
        `New Note Added! Title: ${JSON.stringify(
          newNote.title
        )}, Text: ${JSON.stringify(newNote.text)}, ID: ${newNote.id}`
      );

      res.send(notesArr);
    });
  });