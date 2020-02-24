import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/TodoApp/TodoApp';

class App extends Component{
  

  render(){
    return(
      <div className="App">
        <h1 className="title">Todo app</h1>
        <TodoApp />

      </div>
    );
  }
};

export default App;
