import React from 'react';
import { func, string } from 'prop-types';

const AddButton = function AddButton({ userInput, onUserInputChange, add }) {
  return (
    <div className="add-button">
      <h1>Create Todo List</h1>
      <input
        name="input"
        value={userInput}
        onChange={onUserInputChange}
      />
      <button type="button" onClick={add}>Add</button>
    </div>
  );
};

AddButton.propTypes = {
  add: func.isRequired,
  userInput: string.isRequired,
  onUserInputChange: func.isRequired,
};

export default AddButton;
