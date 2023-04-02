import { Product } from '../components/ProductItem/ProductItem';

const filter = (product: Product, query: string) => {
  const regex = new RegExp(`${query}`, 'ig');
  if (regex.test(product.title)) return true;
  if (regex.test(product.description)) return true;
  if (regex.test(String(product.price))) return true;
  if (regex.test(product.category)) return true;
  if (regex.test(String(product.rating.count))) return true;
  if (regex.test(String(product.rating.rate))) return true;
  return null;
};

export { filter };
