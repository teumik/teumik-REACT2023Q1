import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './App';
import './index.scss';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
