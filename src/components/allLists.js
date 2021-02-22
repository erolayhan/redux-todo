import React from 'react';
import { useState } from 'react'
import { useSelector } from 'react-redux';
import AddTodo from './addTodo';
import List from './list'
import { connect } from 'react-redux'


function AllLists(props) {
    const [listName, setListName] = useState()
    const state = useSelector((state) => { return state.reducer; })

    const addList = (listName) => {
        props.dispatch({ type: 'ADD_LIST', name:listName  })
    }
    return (
        <div>
            <div className="row ml-2">
                {state.lists.map((listname, index) => {
                    return <div className="col-3">
                        <List key={index} listId={index}></List>
                    </div>
                })}
                liste Ekle
                <form onSubmit={(e) => { e.preventDefault(); addList(listName) }}>
                    <input onChange={(e) => setListName(e.target.value)} />
                    <button type="submit">Liste Ekle</button>
                </form>
            </div>
            {/* {state.todos.map(element => {
                return <li key={element.id}>{element.text}</li>
            })} */}
        </div>
    );
}

export default connect()(AllLists);
