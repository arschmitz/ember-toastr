/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-toastr',

  included: function(app, parentAddon) {
    if (!process.env.EMBER_CLI_FASTBOOT) {
      var target = (parentAddon || app);
      if (target.app) {
        target = target.app;
      }
      var bowerDir = target.bowerDirectory;

      target.import(bowerDir + '/toastr/toastr.js');
      target.import(bowerDir + '/toastr/toastr.css');
    }
  }
};
