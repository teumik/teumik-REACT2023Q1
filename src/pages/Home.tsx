import { Products } from '../components/Products/Products';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useSearch } from '../hooks/useSearch';

function Home() {
  const { products } = useFetchProducts();
  const { query, setQuery } = useSearch();

  return (
    <>
      <h1>Home</h1>
      <Products
        products={products}
        query={query}
        setQuery={setQuery}
      />
    </>
  );
}

export { Home };
