import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';

const Pages = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
    </Router>
  );
};

export default Pages;
