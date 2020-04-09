let path = require("path");
let router = require("express").Router();

router.get("/notes", function(request, response) {
    // send  notes file
    response.sendFile(path.join(__dirname, "../public/notes.html"));
});



module.exports = router;