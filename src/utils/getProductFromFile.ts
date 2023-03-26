type JSONRequest = <T>(url: string) => Promise<T>;

const getProductFromFile: JSONRequest = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json);

export { getProductFromFile };
