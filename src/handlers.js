const {nanoid} = require('nanoid');
const {items} = require('./model');

const addNewItemHandler = (request, reply) => {
  const {
    name,
    price,
    description,
    linkImage,
    category,
    isRecommended,
  } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();

  const newItem = {
    id,
    name,
    price,
    description,
    linkImage,
    category,
    isRecommended,
    createdAt,
  };
  items.push(newItem);

  const isSuccess = items.findIndex((item) => item === newItem) >= 0;

  if (isSuccess) {
    return reply.response({
      'status': 'success',
      'message': 'Item baru berhasil ditambahkan.',
    }).code(201);
  }

  return reply.response({
    'status': 'failed',
    'message': 'Gagal menambahkan item baru.',
  }).code(500);
};

const getAllItems = (request, reply) => {
  const {category} = request.query;

  if (category !== undefined) {
    const filteredItems = items.filter((item) => item.category === category);

    if (filteredItems.length > 0) {
      return reply.response({
        'status': 'success',
        'message': `Berhasil mendapatkan daftar semua item category\
 "${category}".`,
        'responses': filteredItems,
      }).code(200);
    }

    return reply.response({
      'status': 'failed',
      'message': `Gagal mendapatkan daftar item category "${category}".`,
    }).code(404);
  }

  return reply.response({
    'status': 'success',
    'message': 'Berhasil mendapatkan daftar semua item.',
    'responses': items,
  }).code(200);
};

const getItemById = (request, reply) => {
  const {id} = request.params;
  const specificItem = items.filter((item) => item.id === id)[0];

  if (specificItem !== undefined) {
    return reply.response({
      'status': 'success',
      'message': 'Berhasil mendapatkan sebuah item.',
      'responses': specificItem,
    }).code(200);
  }

  return reply.response({
    'status': 'failed',
    'message': 'Gagal mendapatkan sebuah item.',
  }).code(404);
};

module.exports = {
  addNewItemHandler,
  getAllItems,
  getItemById,
};
