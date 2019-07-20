import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList'
import NavBar from './components/nav'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ToDoList />

    </div>
  );
}

export default App;
