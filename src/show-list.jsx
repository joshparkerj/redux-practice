import React from 'react';
import { func, arrayOf, string } from 'prop-types';

const ShowList = function ShowList({ list, del }) {
  return (
    <div className="show-list">
      <h1>Display Todo List</h1>
      {list.map((e, i) => (
        <div className="todo-list-item" key={e}>
          <h1>{e}</h1>
          <button type="button" onClick={() => del(i)}>delete this item</button>
        </div>
      ))}
    </div>
  );
};

ShowList.propTypes = {
  del: func.isRequired,
  list: arrayOf(string).isRequired,
};

export default ShowList;
