import React from 'react';

import AppHeader from '../header';
import SearchPanel from '../search-panel';
import TodoList from '../item-list';
import ItemAdd from '../item-add';

import './app.css'

const App = () => {

    return (
      <div class="todo-app">
         <AppHeader />
         <SearchPanel />
         <TodoList /> 
         <ItemAdd /> 
      </div>
    );
};

export default App;