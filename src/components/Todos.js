import React, { Component } from 'react';
import TodoItem from "./TodoItem";
//to apply prop-types we need to import prop-types
import  PropTypes from 'prop-types';

class Todos extends Component {

    render() {
//console.log(this.props.todos)
        // use map for loop through an array basically
        return this.props.todos.map((todo)=>(

           //<TodoItem todo={todo} /> ************ -> this way is correct but better to have a key to be unique
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />


        ));
    }
}

//giving prop-types for best practise
Todos.propTypes={
    todos: PropTypes.array.isRequired
}

export default Todos;
