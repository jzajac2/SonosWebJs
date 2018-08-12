import 'whatwg-fetch';
const baseUrl = "http://localhost:5005/";

export function getSayIt() {
  return get('sayall/Attention');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
