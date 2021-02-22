const path = require("path");


function setHtmlRoutes(app) {
  app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "..", "public", "notes.html")));

  /* All other GET routes will return the index */
  app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "public", "index.html")));
}

module.exports = setHtmlRoutes;