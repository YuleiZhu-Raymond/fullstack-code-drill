import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 加载任务列表
  const fetchTodos = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('http://localhost:3001/api/todos');
      setTodos(res.data);
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // 添加任务
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await axios.post('http://localhost:3001/api/todos', { task });
      setTask('');
      fetchTodos(); // 重新加载
    } catch (err) {
      setError('Failed to add task');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 My To-Do List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t.task}</li>
        ))}
      </ul>

      <form onSubmit={handleAddTask}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
