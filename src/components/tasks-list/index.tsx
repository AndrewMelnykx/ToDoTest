import MainInput from "@main-input/index";
import NavBar from "@components/nav-bar";

import "./index.scss";
import Task from "@components/task";
import TaskElem from "@components/task";

const TasksList = () => {
  return (
    <div className="task-list-wrapper">
      <div className="input-wrapper">
        <p className="title-input ">TODO</p>
        <MainInput />
      </div>

      <div className="task-list">
        <Task />
      </div>
      <NavBar />
      <p className="nav-notification"> Drag and drop to render list</p>
    </div>
  );
};

export default TasksList;
