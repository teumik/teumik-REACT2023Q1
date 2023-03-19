type Axios = <T>(url: string) => Promise<T>;

const axios: Axios = (url) =>
  fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTION',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((json) => json);

export { axios };
