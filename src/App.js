import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import CartPage from './components/Pages/CartPage';
import BookList from './components/BookList';
import WithBookStoreService from './components/hoc';
import Header from './components/Header';

class App extends Component {
  render() {

    return (
      <div className="container">
        <Header numItems={4} total={200} />
        <div className="main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App