window.appName = 'app1';

class Util {
  constructor(reportUrl, appName = window.appName) {
    // 上报地址
    // 'http://localhost:7001/monitoringplatform/getError'
    this.reportUrl = reportUrl;
    // 上报app
    this.appName = appName;
    // 错误手机率(默认全部收集)
    this.odds = 1;
  }

  /**
   * 上报错误
   * @param {object} reportData 
   */
  async report(reportData) {
    if (Math.random() <= this.odds) {
      console.log('上报');
      new Image().src = `${this.reportUrl}?appName=${this.appName}&error=${JSON.stringify(reportData)}`;
    } else {
      console.log('不上报');
    }
  }

  /**
   * 错误收集率设置
   * @param {number} odds 
   */
  setOdds(odds) {
    this.odds = odds;
  }

}

let util = new Util('http://localhost:7001/monitoringplatform/getError');
// 错误收集率
util.setOdds(1);

// 1.捕获运行时、同步、异步错误
window.onerror = (msg, url, row, col, error) => {
  util.report({ msg, url, row, col, error })
  // 阻止异常向上抛出
  return true;
}

// 2.捕获“网络请求异常”错误
window.addEventListener('error', (msg, url, row, col, error) => {
  util.report({ msg, url, row, col, error })
}, true);

// 3.捕获全局Promise错误
window.addEventListener('unhandledrejection', (event) => {
  util.report(event)
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
