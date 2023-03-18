import { Component, ReactPropTypes } from 'react';
import style from './products.module.scss';
import { axios } from '../../utils/axios';
import { SearchForm } from '../SearchForm/SearchForm';
import { paths } from '../../routers/paths';
import { Product, ProductItem } from '../ProductItem/ProductItem';

interface ProductsState {
  products: Product[];
  query: string;
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
    axios<Product[]>(paths.serverUrl).then((products) => {
      this.setProducts(products);
    });
  }

  setProducts = (products: Product[]) => {
    this.setState((state) => ({ ...state, products }));
  };

  setQuery = (query: string) => {
    this.setState((state) => ({ ...state, query }));
  };

  filterProducts = (search: string) => {
    const query = search.replace(',', '.');
    const { products } = this.state;
    const regex = new RegExp(`${query}`, 'ig');
    return products.filter((product) => {
      if (regex.test(product.title)) return true;
      if (regex.test(product.description)) return true;
      if (regex.test(String(product.price))) return true;
      if (regex.test(product.category)) return true;
      if (regex.test(String(product.rating.count))) return true;
      if (regex.test(String(product.rating.rate))) return true;
      return false;
    });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <SearchForm setQuery={this.setQuery} />
        <section className={style.products}>
          {this.filterProducts(query).map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      </>
    );
  }
}

export { Products };
