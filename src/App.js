import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import Service from './components/Pages/Service';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/product" component={Product} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
