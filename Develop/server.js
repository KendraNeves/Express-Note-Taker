var express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// basic server template
// see 14-FinalStarwarsApp/server-template.js
// plus require routes 
var app = express();
var PORT = process.env.PORT || 8080;

// PLUS the following 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* 
^^ creates a path to static front-end files: html, css & js.
notice how files are referenced in index.html: 
                       <script src="/js/index.js"></script>. 
this is because we have created a static path that routes
to the /public directory automatically.
*/
app.use("/api", apiRoutes);  // /api/notes
app.use("/", htmlRoutes);    // /notes or /

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
