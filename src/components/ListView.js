import { useStore } from "../storse/useStore";
import { useState } from "react";

export default function ListView() {
  const { tasks } = useStore();

  const rowHeight = 40;
  const visibleCount = 15;
  const [scrollTop, setScrollTop] = useState(0);

  const start = Math.floor(scrollTop / rowHeight);
  const end = start + visibleCount;

  const visibleTasks = tasks.slice(start, end);

  return (
    <div
      style={{ height: 400, overflowY: "auto" }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: tasks.length * rowHeight }}>
        <div style={{ transform: `translateY(${start * rowHeight}px)` }}>
          {visibleTasks.map((t) => (
            <div
              key={t.id}
              style={{
                height: rowHeight,
                borderBottom: "1px solid #ccc",
              }}
            >
              {t.title} - {t.priority}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}