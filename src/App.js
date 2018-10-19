import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycard from './card/Mycard'
class App extends Component {
  onChange(bossza){ 
    this.setState({"showhum" : bossza.target.value})
    console.log(bossza.target.value)
  }
  constructor(props){
    super(props)
    this.state={"showhum": ""}
    
      
    }
  render() {
    let test = "Hello Boss"
    return (
      <div>
      <Mycard name={this.state.showhum}/>

      <input onChange={(bossza)=>this.onChange(bossza)}
      type="text"
      value={this.state.showhum}/>
      </div>
    );
    }
}

export default App;
