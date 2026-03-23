export const generateTasks = (count = 500) => {
  const statuses = ["todo", "inprogress", "review", "done"];
  const priorities = ["low", "medium", "high", "critical"];
  const users = ["VK", "AJ", "RS", "MK", "AP", "SJ"];

  return Array.from({ length: count }).map((_, i) => {
    const due = new Date();
    due.setDate(due.getDate() + Math.floor(Math.random() * 20 - 10));

    return {
      id: i.toString(),
      title: `Task ${i + 1}`,
      assignee: users[Math.floor(Math.random() * users.length)],
      status: statuses[Math.floor(Math.random() * 4)],
      priority: priorities[Math.floor(Math.random() * 4)],
      dueDate: due.toISOString(),
    };
  });
};