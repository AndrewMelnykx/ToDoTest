import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TasksList from "@components/tasks-list";
import Header from "@header/index";

import "./index.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="main-page-wrapper">
        <Header />
        <TasksList />
      </div>
    </DndProvider>
  );
}

export default App;
