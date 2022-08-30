import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import { FC } from 'react';
import { addNotes, INotes, setValue } from '../../store/slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import EditModal from './EditModal';
import ListItem from './ListItem';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const Workspace:FC = () => {
  const state = useAppSelector(state => state.slice)
  const dispatch = useAppDispatch() 

  const handleSubmit = ({id, value}: any) => {
    if(value !== '') {
      dispatch(addNotes({id: id, body: value}))
    } else {
      alert('Please write your note.')
    }
    dispatch(setValue(''))
  }

  const handleChange = (e:any) => {
      dispatch(setValue(e.target.value))
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', flex: 2, alignItems: 'center', height:'100%'}}>
        <TextField id="outlined-basic" label="Заметка..." variant="outlined" 
        sx={{width: '500px', mb: 5, borderRadius: 5, mt: 5}}
        value={state.value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <DoneOutlineOutlinedIcon sx={{cursor: 'pointer'}}
              onClick={() => handleSubmit({id: Math.random(), value: state.value})}/>
            </InputAdornment>
          ),
        }} />
        <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', height: '100%',
      maxWidth: 600}}>
          {state.notes.length === 0 ? (
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10}}>
              <TipsAndUpdatesOutlinedIcon color="action" sx={{fontSize: 96, mb: 2}}/>
            <Typography  variant="h5" color='GrayText'>
              Здесь будут ваши заметки.
            </Typography>
              </Box>
          ):
          state.notes.map(note => (
            <Box key={note.id}>
            <ListItem id={note.id} body={note.body}/>
            <EditModal id={note.id} body={note.body}/>
            </Box>
          ))
          }
        </Box>
    </Box>
  )
}

export default Workspace