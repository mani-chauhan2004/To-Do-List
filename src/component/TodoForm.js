// TodoForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (element) => {
    element.preventDefault();
    if (task.trim()) {
      addTodo({ task, description }); // Pass task and description as an object
      setTask('');
      setDescription('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <Box mb={2}>
        <TextField
          label="New Task"
          value={task}
          onChange={(element) => setTask(element.target.value)}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Description"
          value={description}
          onChange={(element) => setDescription(element.target.value)}
          fullWidth
        />
      </Box>
      <Box mt={2} textAlign="center">
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default TodoForm;
