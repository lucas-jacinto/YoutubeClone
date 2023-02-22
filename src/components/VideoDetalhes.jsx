import React from 'react'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import {Link, useParams} from 'react-router-dom'
import {Typography, Stack, Box} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {fetchFromAPI} from '../utils/fetchFromAPI'
import {Loader, Videos} from './'

const VideoDetalhes = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const {id} = useParams()
  const [videos, setVideos] = useState(null)

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> setVideos(data.items))  
  },[id])

  if(!videoDetail?.snippet) return <Loader />

  const { snippet: { title, channelId, channelTitle }, statistics:{ viewCount, likeCount }} = videoDetail;

  return (
    <Box minHeight='95vh'>
        <Stack direction={{xs:'column', md:'row'}}>
          <Box flex={1}>
            <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player'/>

              <Typography color='#fff' fontWeight='bold' p={2} variant='h5'>
               {title}
              </Typography>

              <Stack direction='row' justifyContent='space-between' sx={{color:'white'}} py={1} px={2}>

                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm:'subtitle1', md:'h6'}} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>

                  <Typography variant='body1' sx={{opacity:0.7, sx:{fontSize:'8px'} }}>
                    {parseInt(viewCount).toLocaleString()} vizualizações
                  </Typography>

                  <Typography variant='body1' sx={{opacity:0.7}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>  
          <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetalhes