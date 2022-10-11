import React from "react";
import "Scss/CadastroCliente.scss";
import { Container, InputAdornment } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import SideBar from "../components/SideBar.js";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import DialogTaskProcessos from "../components/DialogTaskSend.js";
import { serverUrl } from '../settings'

const url = `${serverUrl}/clientes/`

const ValidationTextField = styled(TextField, Autocomplete)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2
  },
  "& input:invalid + fieldset": {
    borderColor: "gray",
    borderWidth: 1
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important" // override inline-style
  }
});



export default class CadastroCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // payload: [],
      // clientes: [],
      arraySize: "",
      user_id: "",
      nome: "",
      razao_social: "",
      numero_cnpj: "",
      bairro: "",
      cidade: "",
      endereco: "",
      endereco_numero: "",
      cep: "",
      created_on: "",
      aliquota_iss: "",
      telefone_operacional: "",
      telefone_financeiro: "",
      email_operacional: "",
      email_financeiro: "",
      data_inicio_contrato: "",
      valor_contrato: ""
    };
  }
  buscarCliente = () => {
    fetch(url).then(response => response.json()).then(dados => {
      const clientesBulk = {}
      dados.forEach(cliente => {
        clientesBulk[cliente.nome] = cliente
      })
      this.setState({ clientes: clientesBulk });
    });
  };

  componentDidMount() {
    this.buscarCliente();
  }

  atualizaNome = e => {
    this.setState({
      nome: e.target.value
    });
  };
  atualizaRazaoSocial = e => {
    this.setState({
      razao_social: e.target.value
    });
  };
  atualizaNumeroCNPJ = e => {
    this.setState({
      numero_cnpj: e.target.value
    });
  };
  atualizaBairro = e => {
    this.setState({
      bairro: e.target.value
    });
  };
  atualizaCidade = e => {
    this.setState({
      cidade: e.target.value
    });
  };
  atualizaEndereco = e => {
    this.setState({
      endereco: e.target.value
    });
  };
  atualizaEnderecoNumero = e => {
    this.setState({
      endereco_numero: e.target.value
    });
  };
  atualizaCEP = e => {
    this.setState({
      cep: e.target.value
    });
  };
  atualizaAliquotaISS = e => {
    this.setState({
      aliquota_iss: e.target.value
    });
  };
  atualizaCreatedOn = e => {
    this.setState({
      created_on: e.target.value
    });
  };
  atualizaTelefoneOperacional = e => {
    this.setState({
      telefone_operacional: e.target.value
    });
  };
  atualizaEmailOperacional = e => {
    this.setState({
      email_operacional: e.target.value
    });
  };
  atualizaTelefoneFinanceiro = e => {
    this.setState({
      telefone_financeiro: e.target.value
    });
  };
  atualizaEmailFinanceiro = e => {
    this.setState({
      email_financeiro: e.target.value
    });
  };
  atualizaDataInicioContrato = e => {
    this.setState({
      data_inicio_contrato: e.target.value
    });
  };
  atualizaValorContrato = e => {
    this.setState({
      valor_contrato: e.target.value
    });
  };

  change = (e, nomeCliente) => {
    const cliente = this.state.cliente[this.state.cliente.length-1];
    this.setState({
      nome: this.state.cliente[this.state.cliente.length - 1].nome,
      user_id: this.state.cliente[this.state.cliente.length - 1].user_id,
      razao_social: cliente.razao_social,
      cep: cliente.cep,
      numero_cnpj: cliente.numero_cnpj,
      bairro: cliente.bairro,
      cidade: cliente.cidade,
      endereco: cliente.endereco,
      endereco_numero: cliente.endereco_numero,
      aliquota_iss: cliente.aliquota_iss,
      valor_contrato: cliente.valor_contrato,
      data_inicio_contrato: cliente.data_inicio_contrato,
      created_on: cliente.created_on,
      valor_contrato: cliente.valor_contrato,
      telefone_financeiro: cliente.telefone_financeiro,
      telefone_operacional: cliente.telefone_operacional,
      email_financeiro: cliente.email_financeiro,
      email_operacional: cliente.email_operacional
    });
  };




  submit = () => {
    const cliente = {
      nome: this.state.nome,
      razao_social: this.state.razao_social,
      cep: this.state.cep,
      numero_cnpj: this.state.numero_cnpj,
      bairro: this.state.bairro,
      cidade: this.state.cidade,
      endereco: this.state.endereco,
      endereco_numero: this.state.endereco_numero,
      aliquota_iss: this.state.aliquota_iss,
      valor_contrato: this.state.valor_contrato,
      data_inicio_contrato: this.state.data_inicio_contrato,
      created_on: this.state.created_on,
      telefone_financeiro: this.state.telefone_financeiro,
      telefone_operacional: this.state.telefone_operacional,
      email_financeiro: this.state.email_financeiro,
      email_operacional: this.state.email_operacional
    };
    this.cadastrarCliente(cliente);
    console.log(this.state.nome);
  };



  cadastrarCliente = cliente => {
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(cliente)
    }).then(response => {
      if (response.ok) {
        this.buscarCliente();
      } else {
        alert = "Não foi possível.";
      }
    });
  };

  render() {
    return (
      <div className="outside">
        <div className="Side-bar">
          <SideBar />
        </div>
        <Container
          style={{
            backgroundColor: "white"
          }}
        >
          <p
            style={{
              font: "Lucida Sans",
              paddingLeft: "7vh",
              fontWeight: 300,
              fontSize: 42,
              letterSpacing: "3px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            {" "}Consulta/Edição Cliente
          </p>
          <div>
            <div className="form-small">
              <Autocomplete
                className="autocomplete-periodicidade"
                disablePortal
                id="periodicidade-id"
                options={Object.keys(this.state.clientes)}
                sx={{ width: 225 }}
                onChange={this.change}
                renderInput={params =>
                  <TextField
                    {...params}
                    label="Cliente"
                  />}
              />
            </div>
            <div className="form-small1">
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="Nome do cliente"
                required
                value={this.state.nome}
                onChange={this.atualizaNome}
                margin="normal"
                variant="outlined"
                id="nome-id"
              />
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="Razão Social"
                required
                value={this.state.razao_social}
                onChange={this.atualizaRazaoSocial}
                margin="normal"
                variant="outlined"
                id="razao-social-id"
              />
            </div>
            <div className="form-small">
              {/* <ValidationTextField
                            label="N° do contrato"
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            className="validation-outlined-input"
                        /> */}
              <ValidationTextField
                label="N° do CNPJ"
                sx={{ width: "45vh" }}
                required
                value={this.state.numero_cnpj}
                onChange={this.atualizaNumeroCNPJ}
                type="number"
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
              <ValidationTextField
                helperText="Data de cadastro"
                sx={{ width: "45vh" }}
                type="date"
                value={this.state.created_on}
                onChange={this.atualizaDataInicioContrato}
                required
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
            </div>
            <div className="form-small1">
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="Bairro"
                value={this.state.bairro}
                onChange={this.atualizaBairro}
                required
                margin="normal"
                variant="outlined"
                className="validation-outlined-input"
              />
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="Cidade"
                value={this.state.cidade}
                onChange={this.atualizaCidade}
                required
                margin="normal"
                variant="outlined"
                className="validation-outlined-input"
              />
            </div>
            <div className="form-small">
              <ValidationTextField
                label="Aliquota ISS"
                sx={{ width: "45vh" }}
                value={this.state.aliquota_iss}
                onChange={this.atualizaAliquotaISS}
                required
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
              <ValidationTextField
                label="Número"
                sx={{ width: "45vh" }}
                required
                value={this.state.endereco_numero}
                onChange={this.atualizaEnderecoNumero}
                type="number"
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
            </div>
            <div className="form-small1">
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="Endereço"
                value={this.state.endereco}
                onChange={this.atualizaEndereco}
                required
                margin="normal"
                variant="outlined"
                className="validation-outlined-input"
              />
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="CEP"
                required
                value={this.state.cep}
                onChange={this.atualizaCEP}
                margin="normal"
                variant="outlined"
                className="validation-outlined-input"
              />
            </div>
            <div className="form-small1">
              <ValidationTextField
                label="Email de contato operacional"
                sx={{ width: "45vh" }}
                value={this.state.email_operacional}
                onChange={this.atualizaEmailOperacional}
                required
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
              <ValidationTextField
                label="Telefone de contato operacional"
                sx={{ width: "45vh" }}
                required
                value={this.state.telefone_operacional}
                onChange={this.atualizaTelefoneOperacional}
                type="number"
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
            </div>
            <div className="form-small">
              <ValidationTextField
                label="Email de contato finaceiro"
                sx={{ width: "45vh" }}
                value={this.state.email_financeiro}
                onChange={this.atualizaEmailFinanceiro}
                required
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
              <ValidationTextField
                label="Telefone de contato financeiro"
                sx={{ width: "45vh" }}
                required
                value={this.state.telefone_financeiro}
                onChange={this.atualizaTelefoneFinanceiro}
                type="number"
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
            </div>
            <div className="form-small">
              <ValidationTextField
                helperText="Data de início do contrato"
                sx={{ width: "45vh" }}
                required
                value={this.state.data_inicio_contrato}
                onChange={this.atualizaDataInicioContrato}
                type="date"
                variant="outlined"
                margin="normal"
                className="validation-outlined-input"
              />
              <ValidationTextField
                required
                label="Valor do contrato"
                sx={{ width: "45vh" }}
                value={this.state.valor_contrato}
                onChange={this.atualizaValorContrato}
                type="number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  )
                }}
                margin="normal"
                className="validation-outlined-input"
              />
            </div>
            <div className="form-small1">
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="Login"
                required
                value={this.state.user_id}
                margin="normal"
                variant="outlined"
                className="validation-outlined-input"
              />
              <ValidationTextField
                sx={{ width: "45vh" }}
                label="Senha"
                required
                margin="normal"
                variant="outlined"
                className="validation-outlined-input"
              />
            </div>
            <div className="button-enviar1">
              <DialogTaskProcessos />
              {/* <Button className='btn-grad-form'
                            variant="outlined"
                            onClick={this.submit}
                            type="submit"
                        >
                            ENVIAR
                        </Button> */}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
