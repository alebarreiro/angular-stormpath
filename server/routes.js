/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var stormpathExpressSdk = require('stormpath-sdk-express');

var spMiddleware = stormpathExpressSdk.createMiddleware();

module.exports = function(app) {

  /*
   This will attach the following route handlers to our Express app:
    POST /oauth/token      - accept the login form POST, return an access token
    POST /api/users        - for creating new users
    GET /api/users/current - info about current user, as permitted by the access token
    GET /logout            - end current token, destroy access token
   */
  spMiddleware.attachDefaults(app);

  // Insert routes below
  app.use('/api/things', spMiddleware.authenticate, require('./api/thing'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};


