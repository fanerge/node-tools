'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    await ctx.render('monitoringplatform.ejs', {});
  }

  test() {
    const ctx = this.ctx;
    await ctx.render('errorTest.ejs', {});
  }

  async getError() {
    const ctx = this.ctx;

    ctx.status = 200;
    ctx.body = {
      success: true
    };
  }
}

module.exports = HomeController;
