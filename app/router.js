'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/screenshot', controller.screenshot.index);
  router.post('/screenshot', controller.screenshot.split);
  // monitoringplatform
  router.get('/monitoringplatform', controller.monitoringplatform.index);
  router.get('/monitoringplatform/getError', controller.monitoringplatform.getError);
  router.get('/monitoringplatform/test', controller.monitoringplatform.test);
};
