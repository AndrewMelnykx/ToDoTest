const generateRandomId = (min: number = 1, max: number = 1000000): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const newTask = (task: string, isChecked: boolean) => {
  const newTaskObject = {
    id: generateRandomId(),
    name: task,
    status: isChecked,
  };
  return newTaskObject;
};

export { generateRandomId, newTask };
