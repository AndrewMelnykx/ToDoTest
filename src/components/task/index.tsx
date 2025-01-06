import { useDispatch, useSelector } from "react-redux";
import { filteredTasksSelector } from "@store/tasks-list/selectors";
import {
  deleteTask,
  toggleTaskStatus,
  updateTaskOrder,
} from "@store/tasks-list/slice";
import { useDrop } from "react-dnd";

import { ItemType } from "@helpers/constants";
import TaskTemplate from "./template";

import "./index.scss";

const Task = () => {
  const dispatch = useDispatch();
  const filteredTasks = useSelector(filteredTasksSelector);

  const handleDrop = (item: { id: number }, monitor: any) => {
    const draggedId = item.id;
    const targetId = monitor.getItem().id;

    if (draggedId !== targetId) {
      dispatch(updateTaskOrder({ draggedId, targetId }));
    }
  };

  const [, drop] = useDrop({
    accept: ItemType,
    drop: handleDrop,
  });

  const toggleTaskStatusHandler = (taskId: number) => {
    dispatch(toggleTaskStatus(taskId));
  };

  const deleteTaskHandler = (taskId: number) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      {filteredTasks.map((task) => (
        <div key={task.id} ref={drop}>
          <TaskTemplate
            wrapperClassName="task-wrapper"
            task={task}
            onCheckboxChange={toggleTaskStatusHandler}
            onDelete={deleteTaskHandler}
          />
        </div>
      ))}
    </>
  );
};

export default Task;
