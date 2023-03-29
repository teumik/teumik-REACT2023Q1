import style from './products.module.scss';
import { SearchForm } from '../SearchForm/SearchForm';
import { ProductItem } from '../ProductItem/ProductItem';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useFilterProducts } from '../../hooks/useFilterProducts';

function Products() {
  const { products } = useFetchProducts();
  const { setQuery, filter } = useFilterProducts();

  return (
    <>
      <SearchForm setQuery={setQuery} />
      <section className={style.products}>
        {products.map(
          (product) =>
            filter(product) && (
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
