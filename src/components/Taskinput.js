import React, { useState } from 'react'

const Taskinput = ({ addTaskItem }) => {



    const [todo, setTodo] = useState('');



    function handleInputVlue(event) { //Function to take new todo from user

        setTodo(event.target.value)
    }


    function handleAddTask(event) {
        event.preventDefault()
        if (todo.trim() === '') return;
        
        addTaskItem(todo);
        setTodo('');
    }

    return (
        <form className='inputField' onSubmit={handleAddTask}>

            <input type='text' value={todo} placeholder='Add Item' onChange={handleInputVlue} />
            <button > + </button>
        </form>);

};

export default Taskinput