const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { checkToken } = require("./helpers/jwt");
const PORT = process.env.PORT || 5000;

//init
require("./db");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*********************************************************/

//Routes

app.use("/login", require("./routes/login"));
app.use("/addToken", require("./routes/addToken"));
app.use("/addApp", require("./routes/addApp"));
app.use("/removeApp", require("./routes/removeApp"));
/*********************************************************/
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
