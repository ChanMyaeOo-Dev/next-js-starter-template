const { create } = require("zustand");

const useProductFormStore = create((set) => ({
    currentModelStatus: false,
    currentNote: {},
    setModelOpen: (newStatus) => set({ currentModelStatus: newStatus }),
    setCurrentNote: (note) => set({ currentNote: note }),
}));

export default useProductFormStore;