import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LuPlus } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import NoteItem from '../components/NoteItem';

const Notes = ({notes}) => {

    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState('');
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = ()=>{
        setFilteredNotes(notes.filter(note=>{
            if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
                return note;
            }
        }))
    }

    useEffect(handleSearch, [text])

  return (
    <section>
        <header className='notes__header'>
            {!showSearch && <h2>Notes</h2>}
            {showSearch && <input type='text' value={text} onChange={(e)=>{setText(e.target.value); handleSearch();}} autoFocus placeholder='Search...'></input> }
            <button className='btn' onClick={()=>setShowSearch(prevState => !prevState)}>{showSearch ? <IoClose size={20}/> : <IoSearch size={20}/>}</button>
        </header>
        <div className="notes__container">
            {showSearch && filteredNotes.length === 0 && <p className='empty__notes'>No notes found</p>}
            {
                !showSearch ? notes.map(note => <NoteItem key={note.id} note={note}/>) : filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
            }
        </div>
        <Link to={'/create-note'} className='btn add__btn'><LuPlus/></Link>
    </section>
  )
}

export default Notes