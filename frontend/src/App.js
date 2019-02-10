import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const urlToGrabFrom = 'http://localhost:8080';

class App extends Component {

   constructor(props){
     super(props);
     this.runContent = this.runContent.bind(this);
     this.state = {content: null};
   }

  async runContent(){
    try {
    const result = await axios.get(urlToGrabFrom);
    console.log(result)
    this.setState({content: result.data});
   }
   catch(error){
        console.log(error);
   }

  }

  componentDidMount(){
    this.runContent();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Also, Content: {this.state.content ? this.state.content : ''}  
	</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
