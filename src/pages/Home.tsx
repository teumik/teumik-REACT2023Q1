import { Pagination } from '../components/Pagination/Pagination';
import { Products } from '../components/Products/Products';
import { useCustomFetch } from '../hooks/useCustomFetch';

function Home() {
  const { isPending, pages, pagesCount, prevPage, nextPage, items, searchItems, notFoundMessage } =
    useCustomFetch();

  return (
    <>
      <h1>Home</h1>
      <Pagination
        pages={pages}
        pagesCount={pagesCount}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      <Products
        isPending={isPending}
        notFoundMessage={notFoundMessage}
        products={items}
        searchItems={searchItems}
      />
    </>
  );
}

export { Home };
