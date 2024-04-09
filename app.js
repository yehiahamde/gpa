const express = require("express");
const logger = require("./middlewares/logger");
const { notFound, errorHanlder } = require("./middlewares/errors");
require("dotenv").config();
const connectToDB = require("./config/db");
const path = require("path");


// Connection To Database
connectToDB();

// Init App
const app = express();

// Static Folder
app.use(express.static(path.join(__dirname,"images")));

// Apply Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);


// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/upload",require("./routes/upload"));

// Error Hanlder Middleware
app.use(notFound);
app.use(errorHanlder);

// Running The Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));

       



app.use(express.static(path.join(__dirname,"images")))

  