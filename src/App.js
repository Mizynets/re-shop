import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './container/HomePage';
import CartPage from './container/CartPage';
import Header from './components/Header';

class App extends Component {
  render() {

    return (
      <div className="container">
        <Header/>
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