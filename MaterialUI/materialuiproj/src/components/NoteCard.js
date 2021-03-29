import React from 'react'

//Destructuring mynote from the notes object and outputting in the div
export default function NoteCard({ mynote}) {
    return (
        <div>
            { mynote.codes }
        </div>
    )
}
