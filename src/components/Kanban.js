import { useStore } from "../storse/useStore";

const columns = ["todo", "inprogress", "review", "done"];

export default function Kanban() {
  const { tasks, updateStatus } = useStore();

  const onDrop = (e, status) => {
    const id = e.dataTransfer.getData("id");
    updateStatus(id, status);
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {columns.map((col) => {
        const filtered = tasks.filter((t) => t.status === col);

        return (
          <div
            key={col}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDrop(e, col)}
            style={{
              width: 250,
              height: 500,
              overflowY: "auto",
              border: "1px solid gray",
              padding: 10,
            }}
          >
            <h3>{col} ({filtered.length})</h3>

            {filtered.map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(e) =>
                  e.dataTransfer.setData("id", task.id)
                }
                style={{
                  background: "white",
                  margin: "8px 0",
                  padding: 10,
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                }}
              >
                <b>{task.title}</b>
                <div>{task.assignee}</div>
                <div style={{ color: "red" }}>{task.priority}</div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}