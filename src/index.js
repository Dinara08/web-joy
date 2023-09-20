import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
   <StoreProvider store={store}>
      <App />
   </StoreProvider>,
);
