'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    await ctx.render('monitoringplatform.ejs', {});
  }

  async test() {
    const ctx = this.ctx;
    await ctx.render('errorTest.ejs', {});
  }

  async getError() {
    const ctx = this.ctx;
    const { appName, error } = ctx.query;
    ctx.status = 200;
    return;
    ctx.body = {
      success: true,
      msg: '上报成功'
    }
  }
}

module.exports = HomeController;
