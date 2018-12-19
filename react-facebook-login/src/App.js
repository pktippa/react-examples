import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FacebookLogin from 'react-facebook-login';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
      </div>
    );
  }
}

const responseFacebook = (response) => {
  console.log(response);
}

export default App;
