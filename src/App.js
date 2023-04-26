import React, { useState, useEffect } from "react";
import "./App.css";
import CreateTask from "./CreateTasks";
import Task from "./Tasks";

const todoList = [
  {
    title: "Grab some Pizza",
    completed: true,
  },
  {
    title: "Eat lunch",
    completed: true,
  },
  {
    title: "Surf the Internet",
    completed: false,
  },
];

function Todo() {
  const [tasks, setTasks] = useState(todoList);
  const [TasksToDo, setTasksToDo] = useState(0);

  useEffect(() => {
    setTasksToDo(tasks.filter((task) => !task.completed).length);
  }, [tasks]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">Pending tasks ({TasksToDo})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={deleteTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
