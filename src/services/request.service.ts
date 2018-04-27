import axios from 'axios';

function store(key, data) {
  console.log('store', key, data);
  localStorage[key] = JSON.stringify(data);
  return Promise.resolve();
}

function load(key) {
  return axios.get(
    'http://www.json-generator.com/api/json/get/cdYSuCPuUO?indent=2',
  );
}

export default {
  store,
  load,
};
