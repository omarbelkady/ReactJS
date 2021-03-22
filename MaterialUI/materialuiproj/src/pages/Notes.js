import React, { useEffect, useState } from 'react'

export default function Notes() {
    const [theNotes, setNotes] = useState([])

    useEffect(()=>{
        fetch('https://localhost:8000/notes')
        .then(res => res.json())
        .then(mydata => setNotes(mydata))
    
    }, [])

    return (
        <div>
            {theNotes.map(anote =>(
                <p key={anote.codes}>{anote.title}</p>
            ))}
        </div>
    )
}
