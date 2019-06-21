import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {simpleAction} from './actions/simpleAction';
import {onChange} from './actions/onChage';
class App extends Component {
  simpleAction = (event) => {
    console.log('internal simpleAction function');
    console.log('this is mapped to button click');
    this.props.simpleAction();
   }
   onChange = (files) => {
     this.props.onChange(files);
   }
  render() {
    return (
      <div className="App">
        <input type="file" name="" id="" onChange={ this.onChange.bind(this)} />
        <button onClick={this.simpleAction}>Test redux action</button><pre>
 {
  JSON.stringify(this.props)
 }
</pre>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  ...state
 });
 

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  onChange: (files) => dispatch(onChange(files))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
