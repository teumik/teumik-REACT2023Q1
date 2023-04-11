import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
    >
      <Route
        index
        element={<Home />}
      />
    </Route>
  )
);

export { router };
