import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from '../components'
import { useParams } from 'react-router-dom'
import {fetchFromAPI} from '../utils/fetchFromAPI'

const PesquisarMenu = () => {

  const [videos,setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
  },[searchTerm])
  return (
    <Box p={2} sx={{overflow: 'auto', height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
      Resultado da busca por: <span style={{color:'red'}}>{searchTerm} </span> videos

      </Typography>

  <Videos videos={videos}/>
  </Box>
  )
}

export default PesquisarMenu