import { useRef } from 'react';
import { createTask } from '../services/api';
import { STATUSES } from '../constants/status';

const TodosForm = ({ onTaskCreated }) => {
  const titleRef = useRef();
  const statusRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title: titleRef.current.value,
      status: parseInt(statusRef.current.value),
    };
    const { data } = await createTask(newTask);
    onTaskCreated(data);
    titleRef.current.value = '';
    statusRef.current.value = '0';
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <input type="text" ref={titleRef} placeholder="Task title..." required />
      <select ref={statusRef}>
        {[0, 1, 2].map((key) => (
          <option key={key} value={key}>
            {STATUSES[key]}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodosForm;
