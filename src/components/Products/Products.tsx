import style from './products.module.scss';
import { SearchForm } from '../SearchForm/SearchForm';
import { Product, ProductItem } from '../ProductItem/ProductItem';
import { Preloader } from '../Preloader/Preloader';

interface Props {
  isPending: boolean;
  notFoundMessage: string;
  products: Product[];
  searchItems: (query: string) => void;
}

function Products({ isPending, products, searchItems, notFoundMessage }: Props) {
  return (
    <>
      <SearchForm searchItems={searchItems} />
      {isPending && <Preloader />}
      <section className={style.products}>
        {notFoundMessage && (
          <div className={style.message}>
            <p>{notFoundMessage}</p>
          </div>
        )}
        {!isPending &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))}
      </section>
    </>
  );
}

export { Products };
