import React, {Component} from 'react';
import logo from './logo.svg';
import './bootstrap.min.css';
import './App.css';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
