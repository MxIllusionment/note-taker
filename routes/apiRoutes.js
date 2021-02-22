const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");

const DBPATH = path.join(__dirname, "..", "db", "db.json");

function setApiRoutes(app) {
  /* GET Routes */
  app.get("/api/notes", (req, res) => {
    res.sendFile(DBPATH);
  });

  /* POST Routes */
  /* API to save a new note */
  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync(DBPATH));

    /* Validity check */
    if (!newNote.title || !newNote.text) {
      return res.status(400).end();
    }

    /* Create unique ID and add new note to DB */
    newNote.id = uniqid();
    noteList.push(newNote);
    fs.writeFileSync(DBPATH, JSON.stringify(noteList));

    /* Return new note */
    res.json(newNote);
  });

  /* DELETE Routes */
  app.delete("/api/notes/:id", (req, res) => {
    let noteList = JSON.parse(fs.readFileSync(DBPATH));

    /* Search for ID index*/
    let idx = noteList.findIndex(note => note.id === req.params.id);

    /* Return error code if ID not found */
    if (idx < 0) {
      return res.status(404).end();
    }

    /* Remove element from note list and save */
    let deletedNote = noteList[idx];
    noteList.splice(idx, 1);
    fs.writeFileSync(DBPATH, JSON.stringify(noteList));

    res.status(200).send(deletedNote);
  });
}

module.exports = setApiRoutes;