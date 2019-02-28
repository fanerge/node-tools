'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getAll() {
        const ress = await this.app.mysql.select('normal_error')
        console.log(ress);
        // const user = await this.ctx.db.query('select * from normal_error');
      // return user;
    }
  }
  
  module.exports = UserService;