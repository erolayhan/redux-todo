import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux'

function AddTodo(props) {
  const [todo, setTodo] = useState();
  const onSubmitHandler = (todo) => {
    props.dispatch({type:'ADD_TODO',todo})
  }
  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); onSubmitHandler(todo) }}>
        <input onChange={(e) => setTodo({ text: e.target.value, list: props.listId })} />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
