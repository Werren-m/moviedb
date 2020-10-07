require("dotenv").config();
const express = require("express");
const app = express();
const port = Number(process.env.PORT);
// const bodyParser = require('body-parser');

const router = require("./routes");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
	console.log("Listening on port " + port);
});
