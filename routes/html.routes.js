// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const path = require("path");

// ROUTING
// exporting the router to other modules
module.exports = (app) => {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  // GET /notes should return the notes.html file.
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // GET * should return the index.html file.
  // If no matching route is found default to home
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
