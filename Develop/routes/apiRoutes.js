var express = require('express');
var router = express.Router();
const store = require("../js/store");

// get
router.get("/notes", function(req, res) {
  return res.json(store.getNotes());
});

// post
router.post("/notes", function(req, res){
  let newNote = req.body;
  newNote = store.writeNote(newNote);

  return res.json(newNote);
});

// delete
router.delete("/notes/:id", function(req, res){
  let noteId = req.params.id;
  store.deleteNote(noteId);
});

module.exports = router;