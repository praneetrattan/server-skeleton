/*
 * Copyright © 2018 Praneet Rattan (@praneetrattan)
 */

/* Contains the base code for setting up the server ans assigning required properties to it */

var restify = require('restify');
var q = require('q');

function create(name) {

    var server = restify.createServer({
        name: name,
        accept: ['application/json']
    });

    server.use(restify.plugins.bodyParser());
    server.use(restify.plugins.authorizationParser());
    server.use(restify.plugins.queryParser());

    server.start = function (port) {
        var deferred = q.defer();
        this.listen(port, function () {
            console.log("Service " + server.name + " is listening at: " + server.url);
            deferred.resolve();
        });
        return deferred.promise;
    };

    return server;
}

exports.create = create;
