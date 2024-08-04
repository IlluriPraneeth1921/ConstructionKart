import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));