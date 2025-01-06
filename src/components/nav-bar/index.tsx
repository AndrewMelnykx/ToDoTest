import { useSelector } from "react-redux";
import {
  allTasksSelector,
  currentFilterSelector,
} from "@store/tasks-list/selectors";
import { UseStoreDispatcher } from "@store/index";
import { clearAllTasks, setFilter } from "@store/tasks-list/slice";
import { active, all, completed } from "@helpers/constants";

import "./index.scss";

const NavBar = () => {
  const allTasks = useSelector(allTasksSelector);
  const currentFilterStatus = useSelector(currentFilterSelector);
  const completedTasks = allTasks.filter((task) => task.status === true);
  const activeTasks = allTasks.filter((task) => task.status === false);

  const dispatch = UseStoreDispatcher();

  const handleFilterClick = (filter: string) => {
    dispatch(setFilter(filter));
  };
  const handleResetting = () => {
    setTimeout(() => {
      handleFilterClick(all);
    }, 200);
  };

  const handleClearingCompleted = () => {
    const completedTaskIds = allTasks
      .filter((task) => task.status)
      .map((task) => task.id);
    dispatch(clearAllTasks(completedTaskIds));

    handleResetting();
  };
  const tasksLeft =
    currentFilterStatus === all
      ? allTasks.length
      : currentFilterStatus === completed
      ? completedTasks.length
      : activeTasks.length;

  return (
    <div className="nav-bar-wrapper">
      <p className="remain-tasks">{tasksLeft + " "} items left</p>
      <div className="nav-bar-buttons">
        <button className="all-button" onClick={() => handleFilterClick(all)}>
          All
        </button>
        <button
          className="active-button"
          onClick={() => handleFilterClick(active)}
        >
          Active
        </button>
        <button
          className="completed-button"
          onClick={() => handleFilterClick(completed)}
        >
          Completed
        </button>

        <button
          className="clear-completed-button"
          onClick={handleClearingCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default NavBar;
