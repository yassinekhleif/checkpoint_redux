import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, editTask } from './actions';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEditTask = (taskId, description) => {
    const newDescription = prompt('Enter the new description:', description);
    if (newDescription) {
      dispatch(editTask(taskId, newDescription));
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => handleToggleTask(task.id)}
          />
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => handleEditTask(task.id, task.description)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default ListTask;
