const jsonUrl = 'http://localhost:9000/get-persons';

export const getJSONList = () => {
  return fetch(jsonUrl, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then(res => {
      console.log(res);
      if (res.ok) return res.json();
      throw new Error('Our request failed');
    })
    .catch(e => {
      return Promise.reject(e);
    });
};
