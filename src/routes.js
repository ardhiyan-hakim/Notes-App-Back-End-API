const { addNoteHanlder } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHanlder,
  },
];

module.exports = routes;
