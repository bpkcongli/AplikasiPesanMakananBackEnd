const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const startInjectingData = require('../inject_data/index');

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.22.115',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Adding plugin to get static files functionality
  await server.register(require('@hapi/inert'));

  server.route(routes);

  await server.start();
  console.log(`Server listening on ${server.info.uri}`);

  startInjectingData();
};

init();
