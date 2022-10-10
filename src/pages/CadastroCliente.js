import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'Scss/CadastroCliente.scss'
import { Container, Button, InputAdornment } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { serverUrl } from '../settings'

const url = `${serverUrl}/clientes/`

const ValidationTextField = styled(TextField, Autocomplete)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'gray',
        borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
});

export default class CadastroCliente extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            nome: '',
            razao_social: '',
            numero_contrato: '',
            vencimento_contrato: '',
            numero_cnpj: '',
            bairro: '',
            cidade: '',
            endereco: '',
            endereco_numero: '',
            cep: '',
            created_on: '',
            aliquota_iss: '',
            telefone_operacional: '',
            telefone_financeiro: '',
            email_operacional: '',
            email_financeiro: '',
            data_inicio_contrato: '',
            valor_contrato: '',
        };
    };

    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }
    atualizaRazaoSocial = (e) => {
        this.setState(
            {
                razao_social: e.target.value
            }
        )
    }
    atualizaNumeroContrato = (e) => {
        this.setState(
            {
                numero_contrato: e.target.value
            }
        )
    }
    atualizaVencimentoContrato = (e) => {
        this.setState(
            {
                vencimento_contrato: e.target.value
            }
        )
    }
    atualizaNumeroCNPJ = (e) => {
        this.setState(
            {
                numero_cnpj: e.target.value
            }
        )
    }
    atualizaBairro = (e) => {
        this.setState(
            {
                bairro: e.target.value
            }
        )
    }
    atualizaCidade = (e) => {
        this.setState(
            {
                cidade: e.target.value
            }
        )
    }
    atualizaEndereco = (e) => {
        this.setState(
            {
                endereco: e.target.value
            }
        )
    }
    atualizaEnderecoNumero = (e) => {
        this.setState(
            {
                endereco_numero: e.target.value
            }
        )
    }
    atualizaCEP = (e) => {
        this.setState(
            {
                cep: e.target.value
            }
        )
    }
    atualizaAliquotaISS = (e) => {
        this.setState(
            {
                aliquota_iss: e.target.value
            }
        )
    }
    atualizaCreatedOn = (e) => {
        this.setState(
            {
                created_on: e.target.value
            }
        )
    }
    atualizaTelefoneOperacional = (e) => {
        this.setState(
            {
                telefone_operacional: e.target.value
            }
        )
    }
    atualizaEmailOperacional = (e) => {
        this.setState(
            {
                email_operacional: e.target.value
            }
        )
    }
    atualizaTelefoneFinanceiro = (e) => {
        this.setState(
            {
                telefone_financeiro: e.target.value
            }
        )
    }
    atualizaEmailFinanceiro = (e) => {
        this.setState(
            {
                email_financeiro: e.target.value
            }
        )
    }
    atualizaDataInicioContrato = (e) => {
        this.setState(
            {
                data_inicio_contrato: e.target.value
            }
        )
    }
    atualizaValorContrato = (e) => {
        this.setState(
            {
                valor_contrato: e.target.value
            }
        )
    }
    atualizaUserId = (e) => {
        this.setState(
            {
                user_id: e.target.value
            }
        )
    }

    submit = () => {
        const cliente = {
            nome: this.state.nome,
            razao_social: this.state.razao_social,
            cep: this.state.cep,
            // vencimento_contrato: this.state.vencimento_contrato,
            // numero_contrato: this.state.numero_contrato,
            numero_cnpj: this.state.numero_cnpj,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            user_id: this.state.user_id,
            endereco: this.state.endereco,
            endereco_numero: this.state.endereco_numero,
            aliquota_iss: this.state.aliquota_iss,
            valor_contrato: this.state.valor_contrato,
            data_inicio_contrato: this.state.data_inicio_contrato,
            created_on: this.state.created_on,
            telefone_financeiro: this.state.telefone_financeiro,
            telefone_operacional: this.state.telefone_operacional,
            email_financeiro: this.state.email_financeiro,
            email_operacional: this.state.email_operacional,
        }
        this.cadastrarCliente(cliente);
        console.log(this.state.user_id)
    }

    buscarCliente = () => {
        fetch(url)
            .then(response => response.json())
            .then(dados => {
                this.setState({ cliente: dados })
            })
    }

    cadastrarCliente = (cliente) => {
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(cliente)
            })
            .then(response => {
                if (response.ok) {
                    this.buscarCliente();
                } else {
                    response.json().then(payload => {
                        console.log(payload)
                    })
                }
            })
    }



    render() {
        return (
            <div className='outside'>
                <div className='Side-bar' >
                    <SideBar />
                </div>
                <Container style={{
                    backgroundColor: 'white'
                }}>
                    <p style={{
                        font: "Lucida Sans",
                        paddingLeft: "7vh",
                        fontWeight: 300,
                        fontSize: 42,
                        letterSpacing: "3px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }} > Cadastrar Cliente</p>
                    <div>
                        <div className='form-small1'>
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Nome do cliente"
                                required
                                value={this.state.nome}
                                onChange={this.atualizaNome}
                                margin='normal'
                                variant="outlined"
                                id="nome-id"
                            />
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Razão Social"
                                required
                                value={this.state.razao_social}
                                onChange={this.atualizaRazaoSocial}
                                margin='normal'
                                variant="outlined"
                                id="razao-social-id"
                            />
                        </div>
                        <div className='form-small'>
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
                                sx={{ width: '45vh' }}
                                required
                                value={this.state.numero_cnpj}
                                onChange={this.atualizaNumeroCNPJ}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                helperText="Data de cadastro"
                                sx={{ width: '45vh' }}
                                type="date"
                                value={this.state.created_on}
                                onChange={this.atualizaCreatedOn}
                                // required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small1'>
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Bairro"
                                value={this.state.bairro}
                                onChange={this.atualizaBairro}
                                required
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Cidade"
                                value={this.state.cidade}
                                onChange={this.atualizaCidade}
                                required
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small'>
                            <ValidationTextField
                                label="Aliquota ISS"
                                sx={{ width: '45vh' }}
                                value={this.state.aliquota_iss}
                                onChange={this.atualizaAliquotaISS}
                                required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                label="Número"
                                sx={{ width: '45vh' }}
                                required
                                value={this.state.endereco_numero}
                                onChange={this.atualizaEnderecoNumero}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small1'>
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Endereço"
                                value={this.state.endereco}
                                onChange={this.atualizaEndereco}
                                required
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="CEP"
                                required
                                value={this.state.cep}
                                onChange={this.atualizaCEP}
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small1'>
                            <ValidationTextField
                                label="Email de contato operacional"
                                sx={{ width: '45vh' }}
                                value={this.state.email_operacional}
                                onChange={this.atualizaEmailOperacional}
                                required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                label="Telefone de contato operacional"
                                sx={{ width: '45vh' }}
                                required
                                value={this.state.telefone_operacional}
                                onChange={this.atualizaTelefoneOperacional}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small'>
                            <ValidationTextField
                                label="Email de contato finaceiro"
                                sx={{ width: '45vh' }}
                                value={this.state.email_financeiro}
                                onChange={this.atualizaEmailFinanceiro}
                                required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                label="Telefone de contato financeiro"
                                sx={{ width: '45vh' }}
                                required
                                value={this.state.telefone_financeiro}
                                onChange={this.atualizaTelefoneFinanceiro}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small'>
                            <ValidationTextField
                                helperText="N° do contrato"
                                required
                                sx={{ width: '45vh' }}
                                value={this.state.numero_contrato}
                                onChange={this.atualizaNumeroContrato}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                helperText="Vencimento do contrato"
                                required
                                sx={{ width: '45vh' }}
                                value={this.state.vencimento_contrato}
                                onChange={this.atualizaVencimentoContrato}
                                type="date"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small'>
                            <ValidationTextField
                                helperText="Data de início do contrato"
                                sx={{ width: '45vh' }}
                                required
                                value={this.state.data_inicio_contrato}
                                onChange={this.atualizaDataInicioContrato}
                                type="date"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                required
                                label="Valor do contrato"
                                sx={{ width: '45vh' }}
                                value={this.state.valor_contrato}
                                onChange={this.atualizaValorContrato}
                                type="number"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                }} margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small1'>
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Login"
                                required
                                value={this.state.user_id}
                                onChange={this.atualizaUserId}
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Senha"
                                type="password"
                                required
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='button-enviar1'>
                            {/* <DialogTaskProcessos /> */}
                            <Button className='btn-grad-form'
                                variant="outlined"
                                onClick={this.submit}
                                type="submit"
                            >
                                ENVIAR
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
