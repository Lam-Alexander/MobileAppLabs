import ToDoList from './ToDoList';
import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    < ToDoList tasks = {tasks}/>
  );
};