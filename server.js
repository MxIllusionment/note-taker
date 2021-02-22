const express = require("express");
const path = require("path");
const cors = require("cors");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

/* Set up express app */
const app = express();
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(express.json());

/* Public static directory for serving up assets and files */
app.use(express.static(path.join(__dirname, "public")));

/* Routes */
apiRoutes(app);
htmlRoutes(app);

/* Start server */
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));