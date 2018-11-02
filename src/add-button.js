import React from 'react';

export function AddButton(props){
  return (
    <div className="add-button">
      <h1>Create Todo List</h1>
      <input
        name="input"
        value={props.userInput}
        onChange={props.onUserInputChange}
      />
      <button onClick={props.add}>Add</button>
    </div>
  )
}