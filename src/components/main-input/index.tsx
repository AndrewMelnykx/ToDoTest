import React from "react";

import { useState } from "react";
import CustomCheckbox from "@components/custom-checkbox";
import { UseStoreDispatcher } from "@store/index";
import { addTask } from "@store/tasks-list/slice";
import { generateRandomId, newTask } from "@helpers/helper-functions";

import "./index.scss";

const MainInput = () => {
  const [task, setTask] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = UseStoreDispatcher();

  const randomId = generateRandomId();
  const currentState = !isChecked;
  const isInvalidTask = task.trim() === "";

  const handleNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const handleResetting = () => {
    setTask("");
    setIsChecked(false);
  };

  const handleCheckboxChange = () => {
    if (isInvalidTask) return;
    setIsChecked(currentState);
    dispatch(addTask(newTask(task, false)));
    setTimeout(() => {
      handleResetting();
    }, 650);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isInvalidTask) return;

    dispatch(addTask(newTask(task, false)));
    handleResetting();
  };

  return (
    <div className="wrapper-input">
      <form onSubmit={handleSubmit} className="input-form">
        <CustomCheckbox
          checked={isChecked}
          taskId={randomId}
          handleChange={handleCheckboxChange}
        />
        <input
          type="text"
          placeholder="Create a new todo..."
          value={task}
          onChange={handleNewTask}
          className="task-input"
        />
      </form>
    </div>
  );
};

export default MainInput;
