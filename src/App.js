
import { useState } from 'react';
import './App.css';
import Taskinput from './components/Taskinput';
import TaskItem from './components/Taskitem';

function App() {

  const [toDoList, setToDoList] = useState([]); //intial value empty array

  const addTaskFun = (taskName) => {

    const newTask = { taskName, checked: false }; 
    setToDoList([...toDoList, newTask])

  }

  function deleteTaskFun(deleteTaskName ){
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
  }

  function toggleCheckFun  (taskName){
    setToDoList ((prevToDoList)=> prevToDoList.map(task => task.taskName === taskName ? {...task, checked: !task.checked }:task));
  }
  return (
    <>
      <div className='container'>
        <h1>ToDo List </h1>

        <Taskinput addTaskItem={addTaskFun} />

        <div className='toDoList'>
          <span>To do</span>
          <ul className='list-items'>
            {toDoList.map((taskLi , key ) => (
              < TaskItem  taskLI={taskLi} key={key} deletTaskItem={deleteTaskFun} toggleCheckItem={toggleCheckFun} />))}

            {toDoList.length === 0 ? (<p className='notify'> no todos </p>): null }
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;
