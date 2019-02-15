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

  config.security = {
    xframe: {
      enable: false,
    },
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
