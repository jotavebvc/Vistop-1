import React from 'react';
import logo from 'Images/logoVis.png';
import 'Scss/App.css';
import { Button } from '@mui/material';


const url ="https://vistapp-backend.herokuapp.com/clientes"

async function fetchApiData () {
  const response = await fetch(url)
  const responseJson = await response.json()
  console.log(responseJson)
}

// async function fetchApiData () {
//     const response = await fetch(url);

//     console.log(response);
// }
// class Checkbox extends React.Component {
//   constructor(props) {
//     super(props); 
//     this.state = { isOn: true };
//   }


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

