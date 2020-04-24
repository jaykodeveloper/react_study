import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header'
import NotFound from './components/common/NotFound'
import CoursesPage from './components/courses/CoursesPage'
import ManageCourse from './components/courses/ManageCourse';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
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
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
