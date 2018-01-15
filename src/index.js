import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configureStore.js';
import DevTools from './DevTools';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
        {/* <DevTools /> */}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
