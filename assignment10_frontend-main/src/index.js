import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Utilities/authProvider';
import { FavoritedProvider } from './Utilities/favoriteProvider';
import { CompaniesProvider } from './Utilities/companiesProvider';
import { JobsProvider } from './Utilities/jobsProvider';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
