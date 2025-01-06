import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TasksDataTypes } from "./types";
import TasksSlice from "./tasks-list/slice";
import { useSelector } from "react-redux";

export interface RootState {
  tasksData: TasksDataTypes;
}

const RootReducer = combineReducers({
  tasksData: TasksSlice,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;
export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
