import React from 'react';

const TodoList = () => {
  return (
    <ul className="list-group todo-list">
      <li className="list-group-item">
        <span className="todo-list-item">
          <span className="todo-list-item-label">Drink Coffee</span>
            <button type="button" className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation"></i>
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </li>
      
    </ul>
  );
};

export default TodoList;