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
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with friends',
        completed: false
      },
    ]
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
};

export default App;
