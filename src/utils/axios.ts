type Axios = <T>(url: string) => Promise<T>;

const axios: Axios = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json);

export { axios };
