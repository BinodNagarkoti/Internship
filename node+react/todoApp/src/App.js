import React from 'react';
import './App.css';
import ToDoList from './ToDoList'
import NavBar from './nav'


function App() {
  return (
    <div className="App">
      <NavBar />
     
      <ToDoList />

    </div>
  );
}

export default App;
