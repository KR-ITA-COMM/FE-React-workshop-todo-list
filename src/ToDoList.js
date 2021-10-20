import React from 'react';
import ToDo from './ToDo';

function ToDoList({toDoList, handleToggle}) {
    return toDoList.map((toDoTask) => <ToDo toDo={toDoTask} handleToggle={handleToggle}></ToDo>)
}

export default ToDoList;