import { TasksDataTypes } from "@store/types";

const all = "all";
const completed = "completed";
const active = "active";
const ItemType = "TASK";

const getFilteredTasks = (state: TasksDataTypes) => {
  return state.allTasks.filter((task) =>
    state.currentFilter === completed
      ? task.status
      : state.currentFilter === active
      ? !task.status
      : true
  );
};

export { all, completed, active, getFilteredTasks, ItemType };
