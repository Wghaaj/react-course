import TodosListItem from './TodosListItem';
import { STATUS_ORDER, STATUSES } from '../constants/status';

const TodoLists = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <div className="columns">
      {STATUS_ORDER.map((status) => (
        <div className="column" key={status}>
          <h2>{STATUSES[status]} ({tasks.filter(t => t.status === status).length})</h2>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <TodosListItem
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TodoLists;
