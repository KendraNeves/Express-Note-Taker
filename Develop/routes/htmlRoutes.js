let path = require("path");
let router = require("express").Router();

router.get("/notes", function(request, response) {
    // send  notes file
    response.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/js/*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/js/index.js"));
});

router.get("/css/*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/css/styles.css"));
});

router.get("*", function(request, response) {
    // send index file
    response.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;