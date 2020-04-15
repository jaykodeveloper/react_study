import React from 'react';
import { BrowserRouter as Router, 
  Route, 
  Redirect,
  Switch } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Redirect from='/about-old' to='/about'/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;