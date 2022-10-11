import React from 'react';
import 'Scss/App.css';
import { Button } from '@mui/material';
import { serverUrl } from './settings';
import { useNavigate } from "react-router-dom";


async function fetchApiData () {
  const response = await fetch(`${serverUrl}/clientes/`)
  const responseJson = await response.json()
  console.log(responseJson)
}
const navigate =useNavigate();

const goToLogin = () => {
  navigate("/login", { replace: true });
};

export default class App extends React.Component {

  componentDidMount = () => {
      goToLogin;
  };
  render () {
    return (
    <div className="App">
      <header className="App-header">
      <Button onClick={fetchApiData}>clique aqui
      </Button>
      </header>
    </div>
    )};
}
