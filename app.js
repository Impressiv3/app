require("dotenv").config();
const express = require("express"),
  path = require("path"),
  logger = require("morgan"),
  helmet = require("helmet"),
  cors = require("cors"),
  compression = require("compression"),
  errorhandler = require("errorhandler"),
  cookieParser = require("cookie-parser"),
  routes = require("./server/routes"),
  isProduction = process.env.NODE_ENV === "production",
  app = express(),
  corsOptions = {
    origin: "http://localhost:8081",
  },
  db = require("./server/models");

app.use(logger("dev")),
  helmet(),
  cors(corsOptions),
  compression(),
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
  express.static(path.resolve(__dirname, "public"));

if (!isProduction) {
  app.use(errorhandler());
}

/* db.sequelize.sync({ force: true }).then(() => {
  console.log("Re-Sync Database");
}); */


app.use("/", routes);

app.use(express.static(path.resolve(__dirname,'public')));
app.all("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
}); 

/* app.all("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
}); */

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not Found");
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
