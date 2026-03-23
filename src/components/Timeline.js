import { useStore } from "../storse/useStore";

export default function Timeline() {
  const { tasks } = useStore();

  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {tasks.slice(0, 50).map((t) => (
        <div
          key={t.id}
          style={{
            width: 100,
            margin: 5,
            background: "skyblue",
          }}
        >
          {t.title}
        </div>
      ))}
    </div>
  );
}