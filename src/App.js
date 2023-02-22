import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import {
  NavBar,
  Feed,
  VideoDetalhes,
  CanalDetalhes,
  PesquisarMenu,
  BarraPesquisa
} from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetalhes />} />
        <Route path="/channel/:id" element={<CanalDetalhes />} />
        <Route path="/search/:searchTerm" element={<PesquisarMenu />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
