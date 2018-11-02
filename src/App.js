import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AddButton } from './add-button';
import { addNewItem,deleteItem } from './redux/action';
import { ShowList } from './show-list.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addToList = () => {
    this.props.addNewItem(this.state.input);
  }

  deleteItem = i => {
    this.props.deleteItem(i);
  }

  render() {
    return (
      <div className="App">
        Can you see me?
        <AddButton
          userInput={this.state.input}
          onUserInputChange={this.handleChange}
          add={this.addToList}
        />
        <ShowList list={this.props.list} del={this.deleteItem} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = {
  addNewItem,
  deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
