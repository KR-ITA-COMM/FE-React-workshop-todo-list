import React, { useState } from 'react';
import Header from "./Header";
import "./App.css"
import data from "./data.json";
import ToDoList from "./ToDoList";



function App() {

    const [toDos, setToDoList] = useState(data);

    const [taskName, setTaskName] = useState('');

    const handleToggle = (id) => {
        let mappedList = toDos.map(task => {
            return task.id === id ? {... task, complete: !task.complete} : {...task}
        })
        setToDoList(mappedList);
    }

    const addTask = (taskName) => {
        let addedList = [...toDos, {id: toDos.length + 1, task: taskName, complete: false}]
        setToDoList(addedList);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setTaskName(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        addTask(taskName);
        setTaskName('');
    }

    return <div className="App">
        <Header />
        <ToDoList toDoList={toDos} handleToggle={handleToggle}/>

        <input onChange={handleChange} value={taskName}></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
}

export default App;