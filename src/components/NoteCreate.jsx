import useNoteStores from '@/stores/useNoteStores';
import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { useForm, Controller } from "react-hook-form"

const NoteCreate = () => {
    const { createNote } = useNoteStores();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ defaultValues: { note: "" } });

    const onSubmit = (data) => {
        const newNote = {
            id: Date.now(),
            note: data.note
        };
        createNote(newNote);
        reset({ note: "" });
    };
    return (
        <>
            <p className="text-blue-500 mb-2 font-bold text-4xl">My Notes</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex items-center gap-3 mb-4'>
                    <Controller
                        name="note"
                        control={control}
                        rules={{
                            required: "Note is required",
                            minLength: { value: 3, message: "Minimum 3 characters" },
                        }}
                        render={({ field }) => (
                            <TextInput
                                {...field}
                                type="text"
                                className='w-full'
                                placeholder="Create new notes here..."
                            />
                        )}
                    />
                    <Button type='submit' className=' text-nowrap'>Add New Note</Button>
                </div >
                {errors.note && <p className="text-red-500">{errors.note.message}</p>}
            </form>
        </>
    )
}

export default NoteCreate