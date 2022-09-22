import React from 'react';

const url = "https://vistapp-backend.herokuapp.com/clientes/"


export default class CadastroClienteV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientes: []
        };
    };

    componentDidMount() {
        this.buscarClientes()
    }

    buscarClientes = () => {
        fetch(url)
            .then(response => response.json())
            .then(dados => {
                this.setState({ clientes: dados })
            })
    }

    render() {
        return (
          <div>
            <h1>Lista de clientes</h1>
            <ul>
              {this.state.clientes.map(cliente => {
                return <li key={`cliente-${cliente.user_id}`}>{cliente.nome}</li>
              })}
            </ul>
          </div>
        )
    }
}