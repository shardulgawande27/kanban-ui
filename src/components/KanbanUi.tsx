// import React from "react";
// import Kanban from "kanban-ui";
import Kanban from "./KanbanC";

const KanbanUi = () => {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      status: "todo",
      priority: "high",
      date: "27 Dec 2024",
    },
    {
      id: 2,
      title: "Task 2",
      status: "todo",
      priority: "low",
      date: "21 Nov 2024",
    },
    {
      id: 3,
      title: "Task 3",
      status: "todo",
      priority: "low",
      date: "17 Aug 2024",
    },
    {
      id: 4,
      title: "Task 4",
      status: "in-progress",
      priority: "high",
      date: "12 Jun 2024",
    },
    {
      id: 5,
      title: "Task 5",
      status: "in-progress",
      priority: "low",
      date: "28 Dec 2024",
    },
    {
      id: 6,
      title: "Task 6",
      status: "done",
      priority: "low",
      date: "14 Oct 2024",
    },
  ];
  return (
    <div>
      <Kanban tasksProp={tasks} />
    </div>
  );
};

export default KanbanUi;
