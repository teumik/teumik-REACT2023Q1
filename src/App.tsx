import { Provider } from 'react-redux';
import { Router } from './routers/router';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export { App };
