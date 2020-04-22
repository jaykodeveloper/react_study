import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header'
import NotFound from './components/common/NotFound'
import CoursesPage from './components/courses/CoursesPage'
import ManageCourse from './components/courses/ManageCourse';

import configureStore from './redux/configureStore';

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/courses" component={CoursesPage} />
            <Route path="/course/:slug" component={ManageCourse} />
            <Route path="/course" component={ManageCourse} />
            <Route component={NotFound} />T
        </Switch>
        </div>
      </Router>
    </ReduxProvider>

  );
}

export default App;
