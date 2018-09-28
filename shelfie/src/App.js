import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';



class App extends Component {
  constructor(props) {
    super (props);
      this.state = {

        inventory: [],

        img: '',
        name: '',
        price: 0
      }
      this.handleImageChange=this.handleImageChange.bind(this)
      this.handleNameChange=this.handleNameChange.bind(this)
      this.handlePriceChange=this.handlePriceChange.bind(this)
  }

 
    handleImageChange(img) {
      this.setState({img: value})
    }

    handleNameChange(value) {
      this.setState({name: value})
    }

    handlePriceChange(value) {
      this.setState({price: value})
    }

  render() {

    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header /> 
      </div>
    );
  }
}

export default App;
