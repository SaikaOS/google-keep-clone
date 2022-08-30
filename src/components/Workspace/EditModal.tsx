import { Box, Button, Modal, TextField } from '@mui/material'
import { FC } from 'react'
import { INotes, removeNote, setUpdate, toggleModal } from '../../store/slice'
import { useAppDispatch, useAppSelector } from '../../store/store'

const EditModal:FC<INotes> = (note) => {
  const state = useAppSelector(state => state.slice)
  const dispatch = useAppDispatch()

  const handleClose = () => {
    if(note.body !== '') {
      dispatch(toggleModal(false))
    } else {
      alert('Please write your note.')
    }
  }

  const handleChange = (e:any) => {
    dispatch(setUpdate({id: note.id, body: e.target.value}))
  }

  const handleDelete = (id:number) => {
    dispatch(removeNote(id))
  }

  return (
   <Box>
    <Modal
      open={state.isModalOpen}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ width: 500, height: 150, position: 'absolute', 
                 left: '30%', top: '35%', bgcolor: 'white', borderRadius: 2 }}>
        <TextField 
        variant="standard" 
        value={note.body} 
        onChange={handleChange}
        sx={{ml: 2, mt: 2}}
        />
        <Button 
        onClick={handleClose}
        sx={{position: 'absolute', right: 0, bottom: 0}}
        >
          Закрыть
        </Button>  
        <Button
        onClick={() => handleDelete(note.id)}
         sx={{position: 'absolute', bottom: 0}}
        >Удалить заметку</Button>         
      </Box>
    </Modal>
   </Box>
  )
}

export default EditModal