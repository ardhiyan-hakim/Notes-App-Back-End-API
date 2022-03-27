const Hapi = require('@hapi/hapi');

const init = async (request, response) => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server saat ini berjalan di ${server.info.uri}`);
};

init();