// TodoList.js
import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
