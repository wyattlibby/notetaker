
const express = require("express");
const path = require("path");
const fs = require("fs");
const db= "./db/db.json";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));


//html routes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.get("/api/notes", (req, res) => {
  return res.sendFile(path.json(__dirname, "db/db.json"));
});

app.get("/api/notes", (req, res) => {
	//return all notes as JSON
  	res.status(200).json(readData());
});
app.post("/api/notes", (req, res) => {
	//add a note from attached JSON
  	
});
app.delete("/api/notes/:id", (req, res) => {
	//delete note matching id
  	
});

app.listen(PORT, function () {
    console.log("Express is listening on port", PORT);
  });

  //Database read and write
  function readData(){
    return JSON.parse(fs.readFileSync(db));
  }
  function writeData(data){
    fs.writeFileSync(db,JSON.stringify(data));
  }

