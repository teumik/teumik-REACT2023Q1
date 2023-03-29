import { useState } from 'react';
import { Product } from '../components/ProductItem/ProductItem';

const useFilterProducts = () => {
  const [query, setQuery] = useState('');
  const filter = (product: Product) => {
    const regex = new RegExp(`${query}`, 'ig');
    if (regex.test(product.title)) return true;
    if (regex.test(product.description)) return true;
    if (regex.test(String(product.price))) return true;
    if (regex.test(product.category)) return true;
    if (regex.test(String(product.rating.count))) return true;
    if (regex.test(String(product.rating.rate))) return true;
    return null;
  };
  return { setQuery, filter };
};

export { useFilterProducts };
