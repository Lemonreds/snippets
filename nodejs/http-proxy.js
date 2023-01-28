
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// 8300 -> 8000
const app = express();
const config = {
  host: 'http://127.0.0.1',
  port: 8030,
  originSever: 'http://127.0.0.1:8000',
};


// use proxy;
app.use(
  '/',
  createProxyMiddleware({
    target: config.originSever,
    changeOrigin: true,
    onError: function onError(err, req, res, target) {
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end(
        'Something went wrong. And we are reporting a custom error message.'
      );
    },
    onProxyReq: function (proxyReq, req, res) {
    },
    onProxyRes: function (proxyRes, req, res) {
      // TAG
      proxyRes.headers['proxy-tag'] = 'HPM';

      function getReferer() {
        const referer = req.headers.referer;
        if (referer) {
          if (referer.substring(referer.length - 1) === '/') {
            return referer.substring(0, referer.length - 1);
          }
        }
        return '*';
      }
      // CORS
      proxyRes.headers['Access-Control-Allow-Origin'] = `${getReferer()}`;
      // proxyRes.headers['Access-Control-Allow-Headers'] = '*';
      proxyRes.headers['Access-Control-Allow-Methods'] =
        'GET, POST, PUT, DELETE, OPTIONS';
      // Private-Network
      proxyRes.headers['Access-Control-Allow-Private-Network'] = true; 
    },
  })
);

app.use((req, res) => {
  res.status(200).json({
    message: 'Hello World',
  });
});

// start
app.listen(config.port, (err) => {
  if (!err) console.log(`[App] server running on port: ${config.port}`);
});

module.exports = app;
