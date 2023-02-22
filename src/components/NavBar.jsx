import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import BarraPesquisa from './BarraPesquisa'
import logo from '../assets/logo-ytclone.png'

const NavBar = () => (
    <Stack direction='row' alignItems='center' p={2} sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
      <Link to='/' style={{display:'flex', alignItems:'center'}} >
        <img src={logo} alt="logo do yt clone" height={100}/>
      </Link>
      <BarraPesquisa/>
    </Stack>
)

export default NavBar