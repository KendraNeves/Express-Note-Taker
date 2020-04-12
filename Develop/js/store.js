// a class to read, write & delete notes.

const fs = require('fs');
const path = require("path");
const dbFilePath = path.join(__dirname, "../db/db.json");

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv4 = require('uuid').v4;

let store = {
   "getNotes": () => {
      let db = fs.readFileSync(dbFilePath);
      return JSON.parse(db);
   },
   
   "writeNote": (newNote) => {
      /*
         var newNote = {
         title: $noteTitle.val(),
         text: $noteText.val()
      }
      */
      newNote.id = uuidv4();

      fs.readFile(dbFilePath, function (err, data) {
         if (err) {
            throw err;
         }

         let db = JSON.parse(data);
         db.push(newNote);

         fs.writeFile(dbFilePath, JSON.stringify(db), (err) => {
            if (err) {throw err;}
         });
      });

      return newNote;
   },

   "deleteNote": (noteId) => {
      // delete specified note

      fs.readFile(dbFilePath, function (err, data) {
         if (err) {
            throw err;
         }

         let db = JSON.parse(data);
         db = db.filter((note) => {
            return note.id != noteId;
         });

         fs.writeFile(dbFilePath, JSON.stringify(db), (err) => {
            if (err) {throw err;}
         });
      });
   }
}
   

/* see 
   09-NodeJS/01-Activities/34-Ins_Introduce-Promises
   or 09-NodeJS/01-Activities/38-Ins_Async-Await
   for ideas about doing asynchronous operations like fs.readFile & fs.writeFile.
   you will have to write to db/db.json for this homework.
   
   let bodyResponse = response.body;
   let newNote = {
      "title": bodyResponse.title,
      "text": bodyResponse.text,
      "id": uuidv1()
   }

   */

module.exports = store;