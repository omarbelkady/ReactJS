import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core';
//I replace the div with a container Tag
//I import the Note Card
import NoteCard from '../components/NoteCard'

export default function Notes() {
    const [theNotes, setNotes] = useState([])

    useEffect(()=>{
        fetch('https://localhost:8000/notes')
        .then(res => res.json())
        .then(mydata => setNotes(mydata))
    
    }, [])

    return (
        <Container>
            <Grid container>
            {theNotes.map(anote =>(
                <Grid item key={anote.codes} xs={12} md={6} lg={4}>
                    {/* <Paper>{anote.title}</Paper> */}
                    <NoteCard note={anote}/>
                </Grid>
            ))}
            </Grid>
        </Container>
    )
}
