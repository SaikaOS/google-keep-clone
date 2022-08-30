import { Box, Button, Drawer, Link, Typography } from '@mui/material'
import React, { FC, useState } from 'react'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { openSideBar } from '../../store/slice';

const Sidebar:FC = () => {
  const state = useAppSelector(state => state.slice)
  const dispatch = useAppDispatch()
  const [active, setActive] = useState(1)

  const toggleActive = (id:number) => {
    setActive(id)
   dispatch(openSideBar())
  }

  return (
    <Box
    sx={{display: 'flex', flexDirection: 'column',alignItems: 'center', height: '100%',
    position: 'absolute', top: 80}}>
        <Button onClick={() => toggleActive(1)}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: state.isToggle ? 250 : 50, pl:3,bgcolor: state.isToggle && active === 1 ? '#FEEFC3': 'none', mb: 2}}
        >
        <EmojiObjectsOutlinedIcon color="action"/>
        <Typography sx={{display: state.isToggle ? 'inline' : 'none', color: 'black', textTransform:'capitalize'}}>Заметки</Typography>
        </Button>
        <Button onClick={() => toggleActive(2)}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: state.isToggle ? 250 : 50, pl:3,
        bgcolor: state.isToggle && active === 2 ? '#FEEFC3': 'none', mb: 2}}
        >
        <NotificationsNoneOutlinedIcon color="action"/>
        <Typography sx={{display: state.isToggle ? 'inline' : 'none', color: 'black', textTransform:'capitalize'}}>Напоминания</Typography>
        </Button>
        <Button onClick={() => toggleActive(3)}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: state.isToggle ? 250 : 50, pl:3,
        bgcolor: state.isToggle && active === 3 ? '#FEEFC3': 'white', mb: 2}}
        >
        <EditOutlinedIcon color="action"/>
        <Typography sx={{display: state.isToggle ? 'inline' : 'none', color: 'black', textTransform:'capitalize'}}>Изменение ярлыков</Typography>
        </Button>
        <Button onClick={() => toggleActive(4)}
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: state.isToggle ? 250 : 50, pl:3,
        bgcolor: state.isToggle && active === 4 ? '#FEEFC3': 'white', mb: 2}}
        >
        <ArchiveOutlinedIcon color="action"/>
        <Typography sx={{display: state.isToggle ? 'inline' : 'none', color: 'black', textTransform:'capitalize'}}>Архив</Typography>
        </Button>
        <Button onClick={() => toggleActive(5)}
         sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: state.isToggle ? 250 : 50, pl:3,
         bgcolor: state.isToggle && active === 5 ? '#FEEFC3': 'white', mb: 2}}
        >
        <DeleteOutlinedIcon color="action"/>
        <Typography sx={{display: state.isToggle ? 'inline' : 'none', color: 'black', textTransform:'capitalize'}}>Корзина</Typography>
        </Button>
    </Box>
  )
}

export default Sidebar