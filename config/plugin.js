'use strict';

// had enabled by egg
// exports.static = true;

exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};

exports.assets = {
    enable: true,
    package: 'egg-view-assets',
    screenshot: '/screenshot/',
    public: '/public'
};

exports.mysql = {
    enable: true,
    package: 'egg-mysql',
  };
