import { useEffect, useState } from 'react';
import { Product } from '../components/ProductItem/ProductItem';
import { getProductFromFile } from '../utils/getProductFromFile';
import { paths } from '../routers/Paths';

export interface ProductsResponse {
  products: Product[];
}

const useFetchProducts = () => {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    getProductFromFile<ProductsResponse>(paths.serverUrl).then(({ products: productsList }) => {
      setProducts(productsList);
    });
  }, []);

  return { products, setProducts };
};

export { useFetchProducts };
