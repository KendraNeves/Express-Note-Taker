var express = require('express');
var router = express.Router();
const path = require("path");
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

module.exports = router;