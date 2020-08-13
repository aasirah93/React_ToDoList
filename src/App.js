import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import About from './components/pages/About';
import Todos from './components/todo/Todos';
import uuid from 'react-uuid';

import './App.css';



class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Clean the dishes',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with parents',
        completed: true
      },
      {
        id: uuid(),
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

  //Add Todo

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete=
            {this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        )} />   
          <Route path="/about" component={About} />
      </div>
    </div>
    </Router>
    );
  }
};

export default App;
