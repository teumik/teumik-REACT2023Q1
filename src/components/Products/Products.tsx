import { Component, ReactPropTypes } from 'react';
import style from './products.module.scss';
import { axios } from '../../utils/axios';
import { SearchForm } from '../SearchForm/SearchForm';
import { paths } from '../../routers/Paths';
import { Product, ProductItem } from '../ProductItem/ProductItem';

interface ProductsState {
  products: Product[];
  query: string;
}

interface ProductsResponse {
  products: Product[];
}

class Products extends Component<Partial<ReactPropTypes>, ProductsState> {
  constructor(props: Partial<ReactPropTypes>) {
    super(props);
    this.state = {
      products: [],
      query: '',
    };
  }

  componentDidMount(): void {
    axios<ProductsResponse>('/data.json').then(({ products }) => {
      this.setProducts(products);
    });
  }

  setProducts = (products: Product[]) => {
    this.setState((state) => ({ ...state, products }));
  };

  setQuery = (query: string) => {
    this.setState((state) => ({ ...state, query }));
  };

  filterProduct = (query: string, product: Product) => {
    const regex = new RegExp(`${query}`, 'ig');
    if (regex.test(product.title)) return true;
    if (regex.test(product.description)) return true;
    if (regex.test(String(product.price))) return true;
    if (regex.test(product.category)) return true;
    if (regex.test(String(product.rating.count))) return true;
    if (regex.test(String(product.rating.rate))) return true;
    return null;
  };

  render() {
    const { products, query: search } = this.state;
    const query = search.replace(',', '.');
    return (
      <>
        <SearchForm setQuery={this.setQuery} />
        <section className={style.products}>
          {products.map(
            (product) =>
              this.filterProduct(query, product) && (
                <ProductItem key={product.id} product={product} />
              )
          )}
        </section>
      </>
    );
  }
}

export { Products };
