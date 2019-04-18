import React, { Component } from 'react';
import './App.css';
import './components/layout/Header'
import Todos from './components/Todos';
import Header from "./components/layout/Header";
import AddTodo from './components/AddTodo';

class App extends Component {
  state={
    todos: [
      {
        id: 1,
        title:'Dinner with family',
        completed: false
      },
      {
        id: 2,
        title:'take out the trash',
        completed: false
      },
      {
        id: 3,
        title:'meeting with boss',
        completed: true
      }
    ]
  }

  markComplete = (id, title) => {
    this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed=!todo.completed
        }
        return todo;
      })});
  }

  //Delete todo
  delTodo = (id)=>{
    console.log(id)
  }

  render() {
    return (
      <div className="App">

        <Header/>
        <AddTodo/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
