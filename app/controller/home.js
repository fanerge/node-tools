'use strict';

const puppeteer = require('puppeteer');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    await ctx.render('home.ejs', {});
  }
}

module.exports = HomeController;
