// 前端错误收集
// 1.捕获运行时非异步错误
//  try-catch

// 2.捕获异步错误
/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
window.onerror = (msg, url, row, col, error) => {
    console.log({ msg,  url,  row, col, error });
    // 阻止异常向上抛出
    return true;
}
// test-error

// 3.捕获“网络请求异常”错误
// 由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行
window.addEventListener('error', (msg, url, row, col, error) => {
    console.log({ msg,  url,  row, col, error });
    // more msg
}, true);

// 4.   捕获全局Promise错误
window.addEventListener('unhandledrejection', (event) => {
    console.log(event);
    // event.reason
});
// Promise.reject(1);

// 5.   捕获不同域错误
// 前端script添加crossOrigin属性，服务端配置响应头：Access-Control-Allow-Origin
// <script src="其他域资源" crossorigin></script>

// 6.   捕获 iframe 中错误
// 1.iframe 页面和你的主站是同域名
//  window.frames[0].onerror = () => {}
// 2.iframe 页面和你的主站不是同个域名，但可以控制 iframe，可以通过 iframe 与主站跨域进行通信 postMessage、name 等。

// 7.   捕获压缩代码中错误
// sourcemap

// 上报错误
function report(error) {
    var reportUrl = 'http://xxxx/report';
    new Image().src = reportUrl + 'error=' + error;
}

// 发送
let send = function(data) {
  // 只采集 30%
  if(Math.random() < 0.3) {
    send(data)      // 上报错误信息
  }
}
