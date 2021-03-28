import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {

  const [taskList, setTaskList] = useState([])

  function addTask(task) {
    setTaskList([...taskList, task]);
  }

  function delTask(index) {
    setTaskList([...taskList.filter((v, i) => i != index)]);
  }

  useEffect(() => {
    console.log(taskList)
  }, [taskList])

  return (
    <div className="App">
      <div className="header"></div>
      <div className="nav"></div>
      <div className="content">
        <TodoInput addTask={addTask} />
        {taskList[0] ? <TodoList taskList={taskList} delTask={delTask}/> : ''}
      </div>
    </div>
  );
}

export default App;
