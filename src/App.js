// App.js
import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Box, Paper, Container} from '@mui/material';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, completed: false }]); // Spread todo object with completed:false
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <AppBarComponent/>
      <Container maxWidth="sm">
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              To-Do List
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
          </Paper>
        </Box>
      </Container>
    
    </>
  );
};

function AppBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TO-DOOOO
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default App;
