import { create } from "zustand";

export const useStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),

  updateStatus: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, status } : t
      ),
    })),
}));