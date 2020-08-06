import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean the dishes',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with parents',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with friends',
        completed: false
      },
    ]
  };

  markComplete = (id) => {
    this.setState({ todo: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
};

export default App;
