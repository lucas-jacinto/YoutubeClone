import React from 'react'
import { Stack } from '@mui/material'
import {categorias} from '../utils/constantes'



const BarraLateral = ({categoriaSelecionada, setCategoriaSelecionada}) => {
  return (
    <Stack direction='row' sx={{overflowY:'auto', height:{sx:'auto', md:'95%'}, flexDirection:{md:'column'}}}>
      {categorias.map((categoria)=>(
          <button 
          className='category-btn'
          onClick={() => setCategoriaSelecionada(categoria.name)}
          style={{
            background: categoria.name === categoriaSelecionada && 'grey', color:'#FFF'}}
          key={categoria.name}
          >
            <span style={{color:categoria.name === categoriaSelecionada ? 'white' : '#EEEDE7', marginRight:'12px'}}>{categoria.icon}</span>
            <span style={{opacity:categoria.name === categoriaSelecionada ? '1' : '0.8'}}>{categoria.name}</span>
          </button>
      ))}
    </Stack>
  )
}

export default BarraLateral