'use strict';

const puppeteer = require('puppeteer');
const Controller = require('egg').Controller;
const path = require('path');

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    // 服务端截屏
    const url = ctx.request.body.url
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // 设置页面视口
    await page.setViewport({
      width: 375,
      height: 812,
      isMobile: true
    });
    await page.goto(url);
    // 获取title
    const title = await page.title();
    const base64 = await page.screenshot({
      path: `${path.join(__dirname, '..', '..', '/screenshot/')}${title}.png`,
      type: 'png',
      fullPage: false,
      encoding: 'base64'
    });
    await browser.close();

    ctx.body = { 
      success: true,
      data: base64
    };
    ctx.status = 200;
  
  }
}

module.exports = HomeController;
