"use client";
import React from 'react'
import NoteItem from './NoteItem'
import NoteCreate from './NoteCreate'
import useNoteStores from '@/stores/useNoteStores'
import { NoteEditFormModel } from './NoteEditFormModel';

const NoteList = () => {
    const { notes } = useNoteStores();
    return (
        <>
            <NoteEditFormModel />
            <div className="flex justify-center">
                <div className="w-2/4 flex flex-col gap-3">
                    <NoteCreate />
                    {notes.map((note) => (
                        <NoteItem key={note.id} note={note} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default NoteList