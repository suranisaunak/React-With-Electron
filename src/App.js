import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick(e) {
    console.log("Click")
  }

  onChangeFile(event) {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    console.log(file);
    this.setState({file}); /// if you want to upload latter
  }

  render() {
    return (
      <div className='App'>
        <p className='App-intro'>
          <i class="fa fa-file-text file-icon-color"></i> Document 1
        </p>
        <div class="red-border">
          <div class="view-pdf">DISPLAY PDF HERE</div>
        </div>
      </div>
    );
  }
}

export default App;
