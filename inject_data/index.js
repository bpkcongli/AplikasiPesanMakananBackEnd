const fetch = require('node-fetch');
const sources = require('./sources');
const host = process.env.NODE_ENV !== 'production'?'localhost':'172.31.22.115';
const endpoint = `http://${host}:8080/api/items`;

const addingItemToBackEnd = async (item) => {
  await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
};

const startInjectingData = async () => {
  sources.map(async (source) => {
    await addingItemToBackEnd(source);
  });
};

module.exports = startInjectingData;
