import React from 'react'
import { Stack, Box } from '@mui/material'

import {VideoCard, CanalCard, Loader} from './'

const Videos = ({videos, direction}) => {

  if(!videos?.length) return <Loader />
 
  return (
    <Stack direction={ direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item,index)=>(
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.canalId && <CanalCard canalDetalhes={item}/>}
        </Box>
      ))}

    </Stack>
  )
}

export default Videos