import style from './products.module.scss';
import { SearchForm } from '../SearchForm/SearchForm';
import { Product, ProductItem } from '../ProductItem/ProductItem';
import { filter } from '../../utils/filterHelper';

interface ProductsProps {
  products: Product[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Products({ products, query, setQuery }: ProductsProps) {
  return (
    <>
      <SearchForm setQuery={setQuery} />
      <section className={style.products}>
        {products.map(
          (product) =>
            filter(product, query) && (
              <ProductItem
                key={product.id}
                product={product}
              />
            )
        )}
      </section>
    </>
  );
}

export { Products };
