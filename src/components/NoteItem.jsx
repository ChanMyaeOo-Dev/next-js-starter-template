import useNoteStores from '@/stores/useNoteStores'
import useProductFormStore from '@/stores/useProductFormStore'
import { Button } from 'flowbite-react'
import React from 'react'
import { HiPencil, HiTrash } from 'react-icons/hi'

const NoteItem = ({ note = {} }) => {
    const { deleteNote } = useNoteStores();
    const { setModelOpen, setCurrentNote } = useProductFormStore();

    const handleDeleteBtn = () => {
        deleteNote(note.id);
    }
    const handleEditBtn = () => {
        setCurrentNote(note);
        setModelOpen(true);
    }
    return (
        <div className='bg-gray-900 rounded-lg px-5 py-3 flex items-center justify-between'>
            <p>{note.note}</p>
            <div className="flex items-center gap-2">
                <Button size='xs' onClick={handleEditBtn}>
                    <HiPencil />
                </Button>
                <Button size='xs' color="red" onClick={handleDeleteBtn}>
                    <HiTrash />
                </Button>
            </div>
        </div>
    )
}

export default NoteItem