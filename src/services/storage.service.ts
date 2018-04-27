function store(key, data) {
  console.log('store', key, data);
  localStorage[key] = JSON.stringify(data);
  return Promise.resolve();
}

function load(key) {
  const str = localStorage[key] || 'null';
  return Promise.resolve(JSON.parse(str));
}

export default {
  store,
  load,
};
