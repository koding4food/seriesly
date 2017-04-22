
const get = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson);
};


export default {
  get,
};
