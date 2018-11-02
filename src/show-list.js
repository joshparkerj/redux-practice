import React from 'react';

export function ShowList(props){
  return (
    <div className="show-list">
      <h1>Display Todo List</h1>
      {props.list.map((e,i) => {
        return (
          <div className="todo-list-item" key={i}>
            <h1>{e}</h1>
            <button onClick={() => props.del(i)}>delete this item</button>
          </div>
        )
      })}
    </div>
  )
}
