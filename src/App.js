import { useEffect, useState } from "react";
import { useStore } from "./storse/useStore";
import { generateTasks } from "./data/generateTasks";
import Kanban from "./components/Kanban";
import ListView from "./components/ListView";
import Timeline from "./components/Timeline";

function App() {
  const { setTasks } = useStore();
  const [view, setView] = useState("kanban");

  useEffect(() => {
    setTasks(generateTasks(500));
  }, []);

  return (
    <div>
      <h1>Project Tracker</h1>

      <button onClick={() => setView("kanban")}>Kanban</button>
      <button onClick={() => setView("list")}>List</button>
      <button onClick={() => setView("timeline")}>Timeline</button>

      {view === "kanban" && <Kanban />}
      {view === "list" && <ListView />}
      {view === "timeline" && <Timeline />}
    </div>
  );
}

export default App;