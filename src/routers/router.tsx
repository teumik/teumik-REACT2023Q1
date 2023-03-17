import { Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { About } from '../pages/About';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export { router };
