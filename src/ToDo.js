import React from 'react';
import "./ToDo.css";

function ToDo({toDo, handleToggle}) {

    const handleClick = () => {
        handleToggle(toDo.id)
    }

    return <div id={toDo.id} className={toDo.complete ? "strike" : ""} onClick={handleClick}>
        {toDo.task}
    </div>
}

export default ToDo;