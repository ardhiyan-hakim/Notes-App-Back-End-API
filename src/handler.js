const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHanlder = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });

  response.code(500);
  return response;
};

const getAllNotesHandler = (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      notes,
    },
  });

  response.code(200);
  return response;
};

module.exports = { addNoteHanlder, getAllNotesHandler };
