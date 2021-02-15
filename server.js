const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

/* Set up express app */
const app = express();
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(express.json());


/* Start server */
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));