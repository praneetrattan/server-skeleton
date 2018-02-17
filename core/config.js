/*
 * Copyright © 2018 Praneet Rattan (@praneetrattan)
 */

var json_config = require('node-json-config');
var configuration = null;
var configurationPath = './config.json';

/* Contains code to fetch server configuration

NOTE:
   Config setups are different from project to project, so this is a simple file based setup.
   You can call the environment's edge service or the secret server to get config and credentials.
   Although some basic config params (such as name, desc, etc) will remain in config.json
*/

function getConfiguration(property) {

    if (property == null) {
        return null;
    }

    if (configuration == null) {
        try {
            configuration = new json_config(configurationPath);
            return configuration.get(property);
        }
        catch (err) {
            console.log('Unable to get property "' + property + '" from configuration. ', err);
            return null;
        }
    }

    return configuration.get(property);
}

exports.getConfiguration = getConfiguration;
