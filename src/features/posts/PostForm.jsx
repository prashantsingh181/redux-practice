import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';

const PostForm = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        title: "",
        content: ""
    })

    function handleFormChange(event) {
        setFormState(prevFormState => ({ ...prevFormState, [event.target.name]: event.target.value }))
    }

    function handleFormSubmission(event) {
        event.preventDefault();
        dispatch(addPost({ id: nanoid(), ...formState }));
        setFormState({ title: "", content: "" });
    }
    return (
        <section className="my-3">
            <form onSubmit={handleFormSubmission} className="flex flex-col gap-3 border border-blue-800 px-8 py-4 rounded bg-blue-100 shadow-lg">
                <label htmlFor="post-title" >Title</label>
                <input type="text" name="title" id="post-title" className="py-1 px-2 rounded border border-cyan-300" value={formState.title} onChange={handleFormChange} />
                <label htmlFor="post-content">Content</label>
                <textarea name="content" id="post-content" cols="30" rows="5" className="py-1 px-2 rounded border border-cyan-300" value={formState.content} onChange={handleFormChange}></textarea>
                <button className="bg-blue-200 py-2 rounded border border-blue-500">Save</button>
            </form>
        </section >
    )
}

export default PostForm