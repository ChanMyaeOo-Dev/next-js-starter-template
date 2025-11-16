import { create } from 'zustand'

const useNoteStores = create((set) => ({
    notes: [
        { "id": 1, "note": "Hello Note 1" },
        { "id": 2, "note": "Hello Note 2" },
        { "id": 3, "note": "Hello Note 3" }
    ],
    createNote: (newNote) => set((state) => ({ notes: [...state.notes, newNote] })),
    deleteNote: (id) => set((state) => ({ notes: state.notes.filter((note) => note.id !== id) })),
    updateNote: (id, updatedNote) => set((state) => ({ notes: state.notes.map((note) => note.id === id ? updatedNote : note) }))
}));

export default useNoteStores;