const fs = require("fs");
const generateUniqueId = require("generate-unique-id");
const editNote = (updatedNotesArray) => {
  fs.writeFile("./db/db.json", JSON.stringify(updatedNotesArray), (err) => {
    if (err) throw err;
  });
};
