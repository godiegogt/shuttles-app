import React from 'react'
import Header from '../layoult/Header/Header'
import Card  from '../layoult/Card/Card'
import { Box } from '@mui/material'

function Main() {
  return (
    <div>
      <Header></Header>
     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', flexWrap: 'wrap', }}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
     </Box>
      
    </div>
  )
}

export default Main