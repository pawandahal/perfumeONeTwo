const express = require("express");
const app = express();
const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// parse application/x-www-form-urlencoded

// parse application/json

dotenv.config({ path: "backend/config/config.env" });

//Route Imports
const perfume = require("./routes/perfumeRoute");


app.get("/", (req, res, next) => {
  res.send("Server started !!!!!!!!!!");
});


app.use("/api/v1", perfume);

//Middlewarer for errors
app.use(errorMiddleWare);

module.exports = app;
