import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './components/ErrorBoundry';
import { BookStoreServiceProvider } from './components/BookStoreServiceContext';
import BookStoreService from './services/BookStoreService';

const bookStoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,

    document.getElementById('root'));

    
serviceWorker.unregister();
