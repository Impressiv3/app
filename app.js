require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const errorhandler = require("errorhandler");
const cookieParser = require("cookie-parser");
const routes = require("./server/routes");
const isProduction = process.env.NODE_ENV === "production";
const app = express();
const corsOptions = {
  origin: "http://localhost:8081",
};
const db = require("./server/models");

app.use(logger("dev"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(__dirname + "/public"));

if (!isProduction) {
  app.use(errorhandler());
}

/* db.sequelize.sync({ alter: true }).then(() => {
  console.log("Re-Sync Database");
});
 */
app.use("/", routes);

app.all("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
});

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

module.exports = app;
