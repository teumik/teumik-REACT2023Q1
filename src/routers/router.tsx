import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { NotFound } from '../pages/NotFound';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Forms } from '../pages/Forms';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="forms" element={<Forms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export { router };
