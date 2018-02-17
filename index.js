/*
 * Copyright © 2018 Praneet Rattan (@praneetrattan)
 */

/* Start-up */

var config = require('./core/config');
var server = require('./core/server');
var api = require('./core/api');
var constants = require('./platform/constants');

function run() {

    var service = server.create(config.getConfiguration(constants.serverName));

    service.start(config.getConfiguration(constants.serverPort)).then(function () {
        api.handle(service);
    });
}

run();