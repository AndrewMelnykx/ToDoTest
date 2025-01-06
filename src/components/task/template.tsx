import CustomCheckbox from "@components/custom-checkbox";
import { ItemType } from "@helpers/constants";
import { useDispatch } from "react-redux";
import { updateTaskOrder } from "@store/tasks-list/slice";
import { Task } from "@store/types";
import { useDrag, useDrop } from "react-dnd";
import CloseImg from "@assets/close.png";

import "./index.scss";

const TaskTemplate = ({
  task,
  onCheckboxChange,
  onDelete,
  wrapperClassName,
}: {
  task: Task;
  onCheckboxChange: (taskId: number) => void;
  onDelete: (taskId: number) => void;
  wrapperClassName: string;
}) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemType,
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (item: { id: number }) => {
      const draggedId = item.id;
      const targetId = task.id;
      if (draggedId !== targetId) {
        dispatch(updateTaskOrder({ draggedId, targetId }));
      }
    },
  });

  const taskItemStyle = {
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: isDragging ? "lightgray" : "white",
  };

  return (
    <div
      className={wrapperClassName}
      ref={(node) => drag(drop(node))}
      style={taskItemStyle}
    >
      <CustomCheckbox
        checked={task.status}
        taskId={task.id}
        handleChange={() => onCheckboxChange(task.id)}
      />

      <div className={task.status ? "custom-strikethrough" : "task-name"}>
        {task.name}
      </div>

      <button className="delete-button" onClick={() => onDelete(task.id)}>
        <img src={CloseImg} alt="close" />
      </button>
    </div>
  );
};

export default TaskTemplate;
