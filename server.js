//const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

// routes
app.use(require("./routes/publicRoutes.js"));
app.use(require("./routes/apiRoutes.js"));
//app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
