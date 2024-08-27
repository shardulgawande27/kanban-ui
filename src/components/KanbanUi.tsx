// import React from "react";
// import Kanban from "kanban-ui";
import Kanban from "./KanbanC";

const KanbanUi = () => {
  const tasks = [
    { id: 1, title: "Task 1", status: "todo", priority: "high" },
    { id: 2, title: "Task 2", status: "todo", priority: "low" },
    { id: 3, title: "Task 3", status: "todo", priority: "low" },
    { id: 4, title: "Task 4", status: "in-progress", priority: "high" },
    { id: 5, title: "Task 5", status: "in-progress", priority: "low" },
    { id: 6, title: "Task 6", status: "done", priority: "low" },
  ];
  return (
    <div>
      <Kanban tasksProp={tasks} />
    </div>
  );
};

export default KanbanUi;
