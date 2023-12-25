import React from 'react';
import { Container } from '@mui/material';
import Global from '../GlobalState'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import {  createTheme } from '@mui/material/styles';
import '../components/style.css';


function Todo() {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (

    <div className='textContainer'>
      <div style={{
        padding: isMobile ? '4em' : '2em'
      }}>
        
        <Container>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.2em' }}>
            <h1>Todo List</h1>
          </div>
          <Global Root={null} />
        </Container>
      </div>
    </div>
    
  );
}

export default Todo;
