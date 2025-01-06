import { RootState } from "../index";

const allTasksSelector = (state: RootState) => state.tasksData.allTasks;
const filteredTasksSelector = (state: RootState) =>
  state.tasksData.filteredTasks;
const currentFilterSelector = (state: RootState) =>
  state.tasksData.currentFilter;

export { allTasksSelector, filteredTasksSelector, currentFilterSelector };
