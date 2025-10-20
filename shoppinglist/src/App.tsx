import { Container } from '@mui/material'
import {AppBar, Toolbar, Typography} from '@mui/material'
import './App.css'
import { useState } from 'react';

export type Item = {
  product: string;
  amount: string;
}

function App() {
  const [ items, setItems ] = useState<Item[]>([]);
  const addItem = (item:Item) => {
    setItems([item, ...items]);
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6'>
            쇼핑 리스트 Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default App
