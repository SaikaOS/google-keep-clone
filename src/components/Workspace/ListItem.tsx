import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { INotes, toggleModal } from '../../store/slice'
import { useAppDispatch } from '../../store/store'

const ListItem:FC<INotes> = (note) => {
  const dispatch = useAppDispatch()

  const openModal = () => {
    dispatch(toggleModal(true))
  }

  return (
    <Box component='div' sx={{border: '1px solid silver', borderRadius: 3, padding: 5, mr: 2, mb: 2}}
    onClick={() => openModal()}>
      <Typography>{note.body}</Typography>
    </Box>
  )
}

export default ListItem 