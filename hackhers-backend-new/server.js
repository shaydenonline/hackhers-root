const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const path = __dirname + '/app/views/';
const app = express();
app.use(express.static(path));

//cross origin requests are nesessary if you're using fetch or want special CSS things that can be used across browsers
var corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:8888" || "http://127.0.0.1:8888"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
// parse requests of content-type - application/json

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});
//require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests

const PORT = process.env.NODE_DOCKER_PORT || 8080;

require("./app/routes/participant.routes.js")(app);
require("./app/routes/volunteer.routes.js")(app);
require("./app/routes/volunteer_time.routes.js")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
