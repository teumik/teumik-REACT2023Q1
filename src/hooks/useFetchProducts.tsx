import { useEffect, useState } from 'react';
import { Product } from '../components/ProductItem/ProductItem';
import { customFetch } from '../utils/customFetch';
import { paths } from '../routers/Paths';

export interface ProductsResponse {
  products: Product[];
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    customFetch<ProductsResponse>({ url: paths.serverUrl }).then(({ products: productsList }) => {
      setProducts(productsList);
    });
  }, []);

  return { products, setProducts };
};

export { useFetchProducts };
