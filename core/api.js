/*
 * Copyright © 2018 Praneet Rattan (@praneetrattan)
 */

/* Contains the all possible routes (endpoints) that this service would handle */

function handle(server) {

    server.get("/knockknock", function (request, response) {
        response.send(200, "Who's there?");
    });
}

exports.handle = handle;