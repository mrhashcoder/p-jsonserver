// Import Libraries Here
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

// Express APP Setup
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Importing Routes Here
const photoAlbumRouter = require("./P-photoalbum/routes");

// Applying Routes Here
app.use(photoAlbumRouter);

module.exports = app;
