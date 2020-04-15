import React, { Component } from 'react';
import './App.scss'

import CardList from './components/CardList'
import Form from './components/Form';

class App extends Component {
  state = {
    profiles: [
    ]
  }
  addNewProfile = (profileData) => {
    this.setState((state, props) => {
      return {
        profiles: [...state.profiles, profileData]

      }
    })
        console.log(profileData);
  }
  render() {
    return (
      <>
        <div className="header">
        {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </>
    );
  }

}

export default App;
