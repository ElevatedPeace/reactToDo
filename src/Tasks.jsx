function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)} className="btn2">
        X
      </button>
      <button onClick={() => completeTask(index)} className="btn1">Complete</button>
    </div>
  );
}
export default Task;
