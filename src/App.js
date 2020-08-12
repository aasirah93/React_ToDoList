import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import Todos from './components/todo/Todos';

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


  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todo: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]});
  }


  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete=
        {this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
    );
  }
};

export default App;
