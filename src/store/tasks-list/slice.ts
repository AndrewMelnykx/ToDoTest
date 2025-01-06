import { all, getFilteredTasks } from "@helpers/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksDataTypes, Task } from "@store/types";

const initialTasksData: TasksDataTypes = {
  allTasks: [],
  filteredTasks: [],
  currentFilter: all,
};

const updateFilteredTasks = (state: TasksDataTypes) => {
  state.filteredTasks = getFilteredTasks(state);
};

const TasksSlice = createSlice({
  name: "tasksSlice",
  initialState: initialTasksData,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.allTasks.push(action.payload);
      updateFilteredTasks(state);
    },
    toggleTaskStatus: (state, action: PayloadAction<number>) => {
      const task = state.allTasks.find((task) => task.id === action.payload);
      if (task) {
        task.status = !task.status;
        updateFilteredTasks(state);
      }
    },
    clearAllTasks: (state) => {
      state.allTasks = [];
      updateFilteredTasks(state);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
      updateFilteredTasks(state);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.allTasks = state.allTasks.filter(
        (task) => task.id !== action.payload
      );
      updateFilteredTasks(state);
    },
    updateTaskOrder: (
      state,
      action: PayloadAction<{ draggedId: number; targetId: number }>
    ) => {
      const { draggedId, targetId } = action.payload;

      const draggedIndex = state.allTasks.findIndex(
        (task) => task.id === draggedId
      );
      const targetIndex = state.allTasks.findIndex(
        (task) => task.id === targetId
      );

      if (draggedIndex !== -1 && targetIndex !== -1) {
        const [draggedTask] = state.allTasks.splice(draggedIndex, 1);
        state.allTasks.splice(targetIndex, 0, draggedTask);
        updateFilteredTasks(state);
      }
    },
  },
});

export const {
  addTask,
  toggleTaskStatus,
  clearAllTasks,
  setFilter,
  deleteTask,
  updateTaskOrder,
} = TasksSlice.actions;

export default TasksSlice.reducer;
