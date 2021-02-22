import React from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import AddTodo from './addTodo';


function List(props) {
    const [list, setList] = useState()
    const state = useSelector((state) => { return state.reducer; })
    const todoList = (index) => {
        return state.todos.filter(todo => todo.list === index)
    }
    return (
        <div>
            {state.lists[props.listId]}
            <div className="row">
                <ul key={props.listId}>
                {todoList(props.listId).map(item => {
                    return <li key={item.id}>{item.text}</li>
                })}
                </ul>
            </div>
            <AddTodo listId={props.listId}></AddTodo>
        </div>
    );
}

export default List;
