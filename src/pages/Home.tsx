import { ProductItem } from '../components/ProductItem/ProductItem';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <ProductItem
        product={{
          id: 666,
          name: 'Fake name',
          status: 'Dead',
          image: 'src',
        }}
      />
    </>
  );
}

export { Home };
