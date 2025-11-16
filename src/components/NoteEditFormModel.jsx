"use client";
import useProductFormStore from "@/stores/useProductFormStore";
import { Button, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import useNoteStores from '@/stores/useNoteStores';
import { useForm, Controller } from "react-hook-form"
import { useEffect } from "react";

export function NoteEditFormModel() {
    const { currentModelStatus, setModelOpen, currentNote, setCurrentNote } = useProductFormStore();
    const { updateNote } = useNoteStores();
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    useEffect(() => {
        if (currentModelStatus) {
            reset({ note: currentNote?.note ?? "" });
        }
    }, [currentModelStatus]);

    const onSubmit = (data) => {
        const newNote = {
            id: currentNote.id,
            note: data.note
        };
        updateNote(currentNote?.id, newNote);
        reset({ note: "" });
        setCurrentNote({});
        setModelOpen(false);
    };
    function onCloseModal() {
        reset({ note: "" });
        setCurrentNote({});
        setModelOpen(false);
    }

    return (
        <>
            <Modal show={currentModelStatus} size="md" onClose={onCloseModal} popup>
                <ModalHeader />
                <ModalBody>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Update Note</h3>
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
                                <Button type='submit' className=' text-nowrap'>Update</Button>
                            </div >
                            {errors.note && <p className="text-red-500">{errors.note.message}</p>}
                        </form>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}
