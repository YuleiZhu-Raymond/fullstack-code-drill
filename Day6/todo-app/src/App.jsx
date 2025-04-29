import { useState } from "react";
import TodoInput from "./components/TodoInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskText) => {
    setTasks([...tasks, {text: taskText}]);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoInput onAddTask={handleAddTask} />
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index}>{tasks.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;