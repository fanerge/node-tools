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
    console.log(ctx.query);
    ctx.status = 200;
  }
}

module.exports = HomeController;
