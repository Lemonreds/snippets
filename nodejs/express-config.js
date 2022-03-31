const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const logger = morgan('tiny');
const { createProxyMiddleware } = require('http-proxy-middleware');

const config = require('./config');

const app = express();

app.use((req, res, next) => {
  if (req.path.indexOf('../') < 0) {
    next();
  } else {
    res.status(404);
    res.send('');
  }
});
const root = path.resolve(__dirname,'public');

app.use(cors());
const filter = function (pathname, req) {
  return true
};

app.use(express.static(root));

app.use(
  '/',
  createProxyMiddleware(filter, {
    target: 'http://localhost:8086',
    changeOrigin: true,
  })
);

app.use(logger);

app.use(compression());
 
app.listen(8001);
console.log('server started');
