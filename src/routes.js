const Path = require('path');
const {
  addNewItemHandler,
  getAllItems,
  getItemById,
} = require('./handlers');

const routes = [
  {
    method: 'GET',
    path: '/img/{file}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'images'),
      },
    },
  },
  {
    method: 'POST',
    path: '/api/items',
    handler: addNewItemHandler,
  },
  {
    method: 'GET',
    path: '/api/items',
    handler: getAllItems,
  },
  {
    method: 'GET',
    path: '/api/items/{id}',
    handler: getItemById,
  },
];

module.exports = routes;
