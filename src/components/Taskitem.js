import React from "react"
import { MdDeleteSweep } from 'react-icons/md'

const TaskItem = ({ taskLI , deletTaskItem, toggleCheckItem}) => {


    return <li className="items">
        <div className="items-text">

            <input type="checkbox" checked={taskLI.checked}  onChange={()=>toggleCheckItem(taskLI.taskName)} />

            <p className={taskLI.checked ? 'isChecked' : ''}>{taskLI.taskName}</p>

        </div>

        <MdDeleteSweep className="delete-icon" onClick={ () => deletTaskItem(taskLI.taskName)} />
    </li>;
};

export default TaskItem;