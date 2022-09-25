import React from 'react';
import 'Scss/App.css';
import { Button } from '@mui/material';
import { serverUrl } from './settings'

async function fetchApiData () {
  const response = await fetch(`${serverUrl}/clientes/`)
  const responseJson = await response.json()
  console.log(responseJson)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button onClick={fetchApiData}>clique aqui
      </Button>
      </header>
    </div>
  );
}

export default App;
