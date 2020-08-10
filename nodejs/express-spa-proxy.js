const express = require("express");
const bodyParser = require("body-parser");
const history = require("connect-history-api-fallback");
const compression = require("compression");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const config = {
  host: "http://127.0.0.1",
  originSever: "http://127.0.0.1:9901",
  port: 18081,
};

// use gzip;
app.use(compression());

// use proxy;
app.use(
  "/epidemic/backend/",
  createProxyMiddleware({
    target: config.originSever,
    changeOrigin: true,
  })
);

// use  history-api-fallback(spa);
app.use("/", history({ index: "/index.html" }));

// use cors;
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// use statis/source;
app.use(express.static(__dirname + "/public"));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// start
app.listen(config.port, (err) => {
  if (!err) console.log(`[App] server running on port: ${config.port}`);
});

module.exports = app;
