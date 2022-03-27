const { addNoteHanlder, getAllNotesHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHanlder,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
];

module.exports = routes;
