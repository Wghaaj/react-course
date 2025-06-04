import { updateTask, deleteTask } from '../services/api';
import Button from './Button';
import { STATUSES } from '../constants/status';

const TodosListItem = ({ task, onStatusChange, onDelete }) => {
  const handleChangeStatus = async (newStatus) => {
    const { data } = await updateTask(task.id, { ...task, status: newStatus });
    onStatusChange(data);
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onDelete(task.id);
  };

  const statusButtons = {
    0: [1],
    1: [0, 2, 4],
    2: [],
    4: [0, 1],
  };

  return (
    <div className="task-card">
      <p><strong>{task.title}</strong></p>
      <div className="task-buttons">
        {statusButtons[task.status]?.map((s) => (
          <Button key={s} onClick={() => handleChangeStatus(s)}>
            {STATUSES[s]}
          </Button>
        ))}
        {task.status === 2 && (
          <Button onClick={handleDelete}>To archive</Button>
        )}
      </div>
    </div>
  );
};

export default TodosListItem;
