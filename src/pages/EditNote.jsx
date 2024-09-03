import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import useCreateDate from '../components/useCreateDate';

const EditNote = ({notes, setNotes}) => {

    const {id} = useParams()
    const note = notes.find((item)=> item.id === id)
    const [title, setTitle] = useState(note.title);
    const [details, setDetails] = useState(note.details);
    const date = useCreateDate()
    const navigate = useNavigate()

    const handleForm = (e)=>{
        e.preventDefault()

        if(title && details){
            const newNote = {...note, title, details, date}
            const newNotes = notes.map(item=>{
                if(item.id === id){
                    item = newNote
                }
                return item;
            })
            setNotes(newNotes)
        }

        navigate('/')
    }

    const handleDelete = ()=>{
        if(window.confirm('Are you sure you want to delete?')){
            const newNotes = notes.filter(item => item.id !== id)

            setNotes(newNotes)
            navigate('/')
        }
    }

  return (
    <section>
        <header className="create-note__header">
            <Link to="/" className='btn'><IoIosArrowBack size={20}/></Link>
            <button className='btn lg primary' onClick={handleForm}>Save</button>
            <button className='btn danger' onClick={handleDelete}><MdDelete size={20}/></button>
        </header>
        <form className='create-note__form' onSubmit={handleForm}>
            <input type='text' placeholder='Title' autoFocus value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <textarea rows="28" placeholder='Note' value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
        </form>
    </section>
  )
}

export default EditNote
