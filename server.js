const express = require("express");
const app = express();
const router = express.Router();
const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);

express.json({ type: "application/json" });

// app.use(whoService, '/');
// app.use(matlabService, '/');

app.get("/", async (req, res) => {
  const sampleVolunteerData = await readFile("./src/db/db.json");
  res.send(sampleVolunteerData);
});

app.listen(3010, () => console.log("Server is Listning on port 3010"));
