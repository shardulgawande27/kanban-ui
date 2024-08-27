import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Task from "./components/task";
import KanbanUi from "./components/KanbanUi";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Task /> */}
      <KanbanUi />
    </>
  );
}

export default App;
