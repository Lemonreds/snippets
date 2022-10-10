// 代理 HTTPS 请求方法
const http = require('http');
const tunnel = require('tunnel');
const axios = require('axios-https-proxy-fix'); // 使用 axios-https-proxy-fix 版本来代替 axios。
axios.defaults.timeout = 15000;
const url =
  'https://www.google.com.hk/search?q=%E4%BD%A0%E5%A5%BD&hl=zh-CN&ei=EbZDY6SOArKP2roPoI6ImAU&ved=0ahUKEwjk2vWG_9T6AhWyh1YBHSAHAlMQ4dUDCA4&uact=5&oq=%E4%BD%A0%E5%A5%BD&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgsILhCABBDHARDRAzILCC4QgAQQxwEQ0QMyCwguEIAEEMcBENEDMggILhCABBDUAjIFCAAQgAQyCwguEIAEEMcBENEDMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHOgQIABBDOgoILhDHARDRAxBDSgQIQRgASgQIRhgAUNEDWIMHYJAIaABwAngBgAGKAogB5AeSAQUwLjMuMpgBAKABAcgBAcABAQ&sclient=gws-wiz';
function onRequest(request, response) {
  console.log('Request received.');
  axios(url, {
    proxy: false,
    httpsAgent: tunnel.httpsOverHttp({
      proxy: {
        host: '127.0.0.1', //代理服务器域名或者ip
        port: 7890, //代理服务器端口
      },
    }),
  })
    .then((res) => {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write(res.data);
      response.end();
    })
    .catch((error) => {
      console.log(error);
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.write('error');
      response.end();
    });
}
http.createServer(onRequest).listen(3030);
