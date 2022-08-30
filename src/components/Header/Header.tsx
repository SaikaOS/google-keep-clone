import React, { FC } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../../../src/assets/keep_logo.png';
import { AppBar, Box, Link, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { setDefaultSearch, setText, toggle } from '../../store/slice';

const Header:FC = () => {
  const state = useAppSelector(state => state.slice)
  const dispatch = useAppDispatch()

  const handleText = (e:any) => {
    dispatch(setText(e.target.value))
  }

  if(state.text === '') {
    dispatch(setDefaultSearch())
  }

  return (
    <AppBar sx={{height: 80}} color="inherit" position="static">
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      pt: 2, pl: 3, pr: 3}}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
      <MenuIcon sx={{mr: 3, cursor: 'pointer'}} onClick={() => dispatch(toggle())}/>
      <img src={logo} alt="" width={40} height={40}/>
      <Link color='inherit' underline='none' href="#" sx={{ml: 2}}>Keep</Link>
      </Box>
      <TextField 
       size="small" 
       id="outlined-basic" 
       label="Поиск" 
       variant="outlined" 
       sx={{width: '50%'}}
       value={state.text}
       onChange={handleText}
       />
      <Box>
      <ReplayOutlinedIcon sx={{mr: 2, cursor: 'pointer'}}/>
      <ViewAgendaOutlinedIcon sx={{mr: 2, cursor: 'pointer'}}/>
      <SettingsOutlinedIcon sx={{cursor: 'pointer'}}/>
      <AppsOutlinedIcon sx={{ml: 5, mr: 2, cursor: 'pointer'}}/>
      <AccountCircleOutlinedIcon sx={{cursor: 'pointer'}}/>
      </Box>
      </Box>
    </AppBar>
  )
}

export default Header