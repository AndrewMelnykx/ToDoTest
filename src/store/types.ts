interface Task {
  id: number;
  name: string;
  status: boolean;
}

interface TasksDataTypes {
  currentFilter: string;
  filteredTasks: Task[];
  allTasks: Task[];
}
export type { Task, TasksDataTypes };
