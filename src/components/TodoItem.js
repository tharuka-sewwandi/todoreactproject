import React, { Component } from 'react'

//to apply prop-types we need to import prop-types
import  PropTypes from 'prop-types';


export class TodoItem extends Component{

    //applying dynamic style using functions
    getStule = () => {
        if (this.props.todo.completed)
        {
            return{
               padding: '15px',
                backgroundColor: 'yellow',
                textDecoration: 'line-through'
            }
        }
        else{
            return {
                textDecoration: 'none'
            }
        }
    }

    // markComplete = () => {
    //     console.log(this.props)
    // }

    render() {

        //const {}=this.props.todo;
        const {id,title}=this.props.todo;

        return(
            <div style={this.getStule()}>

                <p style={{padding :'10px'}}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id,title)}/>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}
//giving prop-types for best practise
TodoItem.propTypes={
    todo: PropTypes.object.isRequired
}
const  btnStyle={
    background:'red',
    color:'white',
    border:'none',
    padding:'5px 10px',
    borderRadius: '50%',
    cursor:'pointer',
    float: 'right'
}

//applying styles using variables

// const itemStyle = {
//     backgroundColor: 'pink'
// }

export default TodoItem
