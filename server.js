'use strict';

const Hapi   = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8080 }); //could make baller with enviroment variables

server.register(
  require('inert'), // plugin "gem" to serve static files cause I don't know how you want to build this.
  (err) => {
    if (err) { throw err; }

    server.route({
      method: 'GET',
      path: '/',
      handler: (req, res) => {
        res.file('index.html');
      }
    });
  });

server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});
