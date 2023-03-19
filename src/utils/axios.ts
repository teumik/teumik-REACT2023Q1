type Axios = <T>(url: string) => Promise<T>;

const axios: Axios = (url) =>
  fetch(url, { mode: 'no-cors' })
    .then((res) => res.json())
    .then((json) => json);

export { axios };
