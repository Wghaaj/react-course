import { useEffect, useState } from 'react';
import { getTasks } from './services/api';
import TodosForm from './components/TodosForm';
import TodoLists from './components/TodosLists';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleNewTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleStatusChange = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <TodosForm onTaskCreated={handleNewTask} />
      <TodoLists
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
