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

/* Public static directory for serving up assets and files */
app.use(express.static(path.join(__dirname, "public")));

/* Routes */
app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "public", "notes.html")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));


/* Start server */
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));