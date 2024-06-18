import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';


export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>

      <Fab variant="extended" href="/quienes-somos">
        <NavigationIcon sx={{ mr: 1 }} />
        INSCRIPCIONES 2024
      </Fab>

    </Box>
  );
}