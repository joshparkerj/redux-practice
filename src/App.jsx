import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddButton from './add-button';
import action from './redux/action';
import ShowList from './show-list';

import './App.css';

const App = function App({ addNewItem, deleteItem, list }) {
  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>REDUX PRACTICE</h1>
      <AddButton
        userInput={input}
        onUserInputChange={({ target: { value } }) => setInput(value)}
        add={() => addNewItem(input)}
      />
      <ShowList list={list} del={deleteItem} />
    </div>
  );
};

App.propTypes = {
  addNewItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, {
  addNewItem: action.addNewItem,
  deleteItem: action.deleteItem,
})(App);
