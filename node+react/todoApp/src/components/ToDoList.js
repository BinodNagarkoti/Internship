import React from 'react'
import List from './List'
import Nav from './nav'
function ToDoList(props){
    return(
        <div>
        <Nav />
        
        <List 
        greetings= {props.location.state.msg}
        usr={props.location.state.usr}
        />
        </div>
    )
}

export default ToDoList