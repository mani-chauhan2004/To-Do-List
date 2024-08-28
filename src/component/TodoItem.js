// TodoItem.js
import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useSpring, animated } from '@react-spring/web';

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div style={springProps}>
      <ListItem>
        <Checkbox
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
        />
        <ListItemText
          primary={todo.task}
          secondary={todo.description}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'green' : 'red',
          }}
        />
        <IconButton edge="end" onClick={() => deleteTodo(index)}>
          <Delete />
        </IconButton>
      </ListItem>
    </animated.div>
  );
};

export default TodoItem;
