/* jshint node: true */
'use strict';
var fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-toastr',

  options: {
    nodeAssets: {
      toastr: {
        vendor: {
          include: ['toastr.js', 'build/toastr.css'],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  included: function() {
    this._super.included.apply(this, arguments);

    this.import('vendor/toastr/toastr.js');
    this.import('vendor/toastr/build/toastr.css');
  }
};
