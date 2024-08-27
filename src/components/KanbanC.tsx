import React, { useState } from "react";
// import { IconContext } from "react-icons";
// import { IoMdAdd } from "react-icons/io";
// import { FaRegFolder } from "react-icons/fa6";
// import { MdOutlineModeComment } from "react-icons/md";
// import NewTask from "@/components/tasks/NewTask";

interface TaskType {
  id: number;
  title: string;
  status: string;
  priority: string;
}
interface KanbanProps {
  tasksProp: TaskType[];
}

const Kanban: React.FC<KanbanProps> = ({ tasksProp }) => {
  const [tasks, setTasks] = useState<TaskType[]>(tasksProp);
  const [dropIndicator, setDropIndicator] = useState<string | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: number
  ) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.clearData();
    setDropIndicator(null);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    status: TaskType["status"]
  ) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");

    const task = tasks?.find((task) => +task.id === +taskId);

    if (task) {
      task.status = status;

      setTasks((prevTasks) =>
        prevTasks?.map((_task) => (_task.id === task?.id ? task : _task))
      );
    }

    setDropIndicator(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDropIndicator(e.currentTarget.id);
  };

  const renderTasks = (status: TaskType["status"]) => {
    return tasks
      ?.filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
          onDragEnd={handleDragEnd}
          className={`w-full px-3 py-3 cursor-pointer   rounded-lg bg-zinc-800  ${
            dropIndicator === status ? "bg-gray-700 " : ""
          }`}
        >
          <div className="flex justify-between ">
            <p className="font-normal">Due</p>
            <p className="font-semibold">27 Dec 2024</p>
          </div>
          <div className="mt-4 flex justify-start">
            <span
              className={`d-block font-semibold px-3.5 py-1 text-sm leading-5 text-white whitespace-nowrap ${
                task.priority === "high" ? " bg-red-700 " : "bg-orange-500"
              } rounded-lg`}
            >
              {task.priority}
            </span>
          </div>
          <div className="taskInfo flex-col mt-4 items-start">
            <p className="text-lg font-semibold text-left">{task.title}</p>
            <p className="font-thin text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              debitis pariatur iure.
            </p>
          </div>
          {/* <div className="h-[1px] bg-[#353232] mt-4"></div>

          <div className="my-2 flex justify-center items-center gap-[50px]">
            <div className="flex items-center gap-2">
              <IconContext.Provider
                value={{
                  className: "shrink-0 text-[18px] font-bold ",
                }}
              >
                <FaRegFolder />
              </IconContext.Provider>
              <p>2</p>
            </div>
            <div className="flex items-center gap-2">
              <IconContext.Provider
                value={{
                  className: "shrink-0 text-[20px] font-bold ",
                }}
              >
                <MdOutlineModeComment />
              </IconContext.Provider>
              <p>3</p>
            </div>
          </div> */}
        </div>
      ));
  };

  return (
    <div className="flex flex-col p-6 h-full dark:bg-gray-900 mx-auto">
      <div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex gap-5 justify-between py-2 pl-5 rounded-md bg-zinc-800 h-[45px] w-[97%] mx-auto">
            <div className="flex gap-5 my-auto text-base font-medium">
              <div className=" my-auto text-zinc-300">Todo</div>
              <div className="flex justify-center items-center text-white whitespace-nowrap bg-[#8724D3] rounded-full h-[27px] w-[27px]">
                <p className="mb-1">
                  {tasks.filter((task) => task.status === "todo").length}
                </p>
              </div>
            </div>
            <div className="cursor-pointer ml-auto">
              {/* <NewTask title={"Todo"} /> */}
            </div>
            <div className="flex gap-3.5 items-center">
              <div className="shrink-0 self-stretch w-1 bg-[#8724D3] rounded-sm h-[32px]" />
            </div>
          </div>
          <div className="flex gap-5 justify-between py-2 pl-5 rounded-md bg-zinc-800 h-[45px] w-[97%] mx-auto">
            <div className="flex gap-5 my-auto text-base font-medium">
              <div className=" my-auto text-zinc-300">InProgress</div>
              <div className="flex justify-center items-center text-white whitespace-nowrap bg-orange-500 rounded-full h-[27px] w-[27px]">
                {tasks.filter((task) => task.status === "in-progress").length}
                <p className="mb-1"></p>
              </div>
            </div>
            <div className="cursor-pointer ml-auto">
              {/* <NewTask title={"InProgress"} /> */}
            </div>
            <div className="flex gap-3.5 items-center">
              <div className="shrink-0 self-stretch w-1 bg-orange-500 rounded-sm h-[32px]" />
            </div>
          </div>
          <div className="flex gap-5 justify-between py-2 pl-5 rounded-md bg-zinc-800 h-[45px] w-[97%] mx-auto">
            <div className="flex gap-5 my-auto text-base font-medium">
              <div className=" my-auto text-zinc-300">Done</div>
              <div className="flex justify-center items-center text-white whitespace-nowrap bg-green-500 rounded-full h-[27px] w-[27px]">
                {tasks.filter((task) => task.status === "done").length}
                <p className="mb-1"></p>
              </div>
            </div>
            <div className="cursor-pointer ml-auto">
              {/* <NewTask title={"Done"} /> */}
            </div>
            <div className="flex gap-3.5 items-center">
              <div className="shrink-0 self-stretch w-1 bg-green-500 rounded-sm h-[32px]" />
            </div>
          </div>

          <div
            id="todo"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "todo")}
            className={`flex flex-col items-center justify-start w-[97%] mx-auto  p-0.5 gap-4 mt-3 rounded ${
              dropIndicator === "todo" ? "bg-gray-700 " : ""
            }`}
          >
            {renderTasks("todo")}
          </div>

          <div
            id="in-progress"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "in-progress")}
            className={`flex flex-col items-center justify-start w-[97%] mx-auto  p-0.5 gap-4 mt-3 rounded ${
              dropIndicator === "in-progress" ? "bg-gray-700 " : ""
            }`}
          >
            {renderTasks("in-progress")}
          </div>

          <div
            id="done"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "done")}
            className={`flex flex-col items-center justify-start w-[97%] mx-auto  p-0.5 gap-4 mt-3 rounded ${
              dropIndicator === "done" ? "bg-gray-700 " : ""
            }`}
          >
            {renderTasks("done")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;
