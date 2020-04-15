import React, { Component } from 'react';
import './App.css';

import TodoListTemplate from './components/TodoListTemplate'

class App extends Component {
  render(){
    return (
      <div>
        <TodoListTemplate
          value
        >
        </TodoListTemplate>
      </div>
    );
  }

}

export default App;
