import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { INotes } from '../../store/slice'
import { useAppSelector } from '../../store/store'
import ListItem from './ListItem'

const SearchedNotes:FC = () => {
  const state = useAppSelector(state => state.slice)
  const filteredNotes = state.notes.filter((note: INotes) => {
    return note.body.toLowerCase().includes(state.text.toString().toLowerCase())
  })
  
  return (
    <Box sx={{display: 'flex', ml: 40, flex: 2, alignItems: 'center', height:'100%', pt: 5}}>
      {filteredNotes.length === 0 ? 
      <Typography>Ничего не найдено.</Typography>
      : filteredNotes.map(note => (
        <ListItem id={note.id} body={note.body}/>
      ))}
      </Box>
  )
}

export default SearchedNotes