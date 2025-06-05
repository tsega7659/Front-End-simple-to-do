import { useState } from 'react';
import './index.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: true },
    { id: 2, title: 'Read book', completed: false },
    { id: 3, title: 'Watch movie', completed: false },
    { id: 4, title: 'Complete project', completed: false }

  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const task = { id: newId, title: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">My-TO-DOs</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded border"
            >
              <>
                <span
                  className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
                  onClick={() => toggleCompleted(task.id)}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;