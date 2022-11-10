import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import init from './utils/init';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const { serarchService } = init();

root.render(
  <BrowserRouter>
    <SearchProvider SearchService={serarchService}>
      <App />
    </SearchProvider>
  </BrowserRouter>
);
