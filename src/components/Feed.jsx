import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {BarraLateral, Videos} from '../components'

import {fetchFromAPI} from '../utils/fetchFromAPI'

const Feed = () => {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Início')
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${categoriaSelecionada}`)
    .then((data)=> setVideos(data.items))
  },[categoriaSelecionada])
  return (
    <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'}, borderRight:'1px solid #EEE', px:     {sx:0, md:2}}}>
        <BarraLateral
          categoriaSelecionada = {categoriaSelecionada}
          setCategoriaSelecionada = {setCategoriaSelecionada}/>

        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'white'}}>
          Copyright © 2023 YT
        </Typography>
      </Box>

      
      <Box p={2} sx={{overflow: 'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
        <span style={{color:'red'}}>Vídeos de </span>  {categoriaSelecionada} 

        </Typography>

      <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed