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
    const client1 = this.app.mysql.get('moniplatform');
    client1.query('SELECT normal AS type', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });
    // client1.query(sql, values);
    return;
    ctx.body = {
      success: true,
      msg: '上报成功'
    }
  }

  async getData() {
    this.ctx.service.monitoringplatform.getAll();
  }
}

module.exports = HomeController;
