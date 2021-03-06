'use strict';

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550211538264_5778';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  config.assets = {
    devServer: {
      command: 'roadhog dev',
      port: 7777,
    },
  };

  config.security = {
    xframe: {
      enable: false,
    },
  };

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'http://localhost:7001',
      // 端口号
      port: '3306',
      // 用户名
      user: 'test_user',
      // 密码
      password: 'test_password',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
