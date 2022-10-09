import React from 'react';
// import { useNavigate } from 'react-router-dom';
import 'Scss/CadastroFuncionario.scss'
import { Container, Button } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar';
import Snackbar from '../components/Snackbar'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { serverUrl } from '../settings'

const url = `${serverUrl}/funcionarios/`
const ValidationTextField = styled(TextField)({
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

const cargo = [
    'Operador', 'Administração', 'Gerência'
];

const gender = [
    'Masculino', 'Feminino', 'Outro'
];

export default class CadastroFuncionario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            open: false,
            nome: '',
            nome_social: '',
            numero_carteira: '',
            data_nascimento: '',
            data_ingresso: '',
            cpf: '',
            rg: '',
            numero_pis: '',
            titulo_numero: '',
            genero: gender[0],
            funçao: cargo[0],
            data_vencimento_cnh: '',
            data_vencimento_aso: '',
            email: '',
            snackMessage: '',
            snackSeverity: 'info'
        };
    };


    atualizaNome = (e) => {
        this.setState(
            {
                nome: e.target.value
            }
        )
    }

    atualizaNomeSocial = (e) => {
        this.setState(
            {
                nome_social: e.target.value
            }
        )
    }
    atualizaNumeroCarteira = (e) => {
        this.setState(
            {
                numero_carteira: e.target.value
            }
        )
    }
    atualizaDataNascimento = (e) => {
        this.setState(
            {
                data_nascimento: e.target.value
            }
        )
    }
    atualizaDataIngresso = (e) => {
        this.setState(
            {
                data_ingresso: e.target.value
            }
        )
    }
    atualizaNumeroPis = (e) => {
        this.setState(
            {
                numero_pis: e.target.value
            }
        )
    }
    atualizaRg = (e) => {
        this.setState(
            {
                rg: e.target.value
            }
        )
    }
    atualizaCPF = (e) => {
        this.setState(
            {
                cpf: e.target.value
            }
        )
    }
    atualizaTituloNumero = (e) => {
        this.setState(
            {
                titulo_numero: e.target.value
            }
        )
    }
    atualizaGenero = (e, newValue) => {
        this.setState(
            {
                genero: newValue
            }
        )
    }
    atualizaFunçao = (e, newValue) => {
        this.setState(
            {
                funçao: newValue
            }
        )
    }
    atualizaDataVencimentoCnh = (e) => {
        this.setState(
            {
                data_vencimento_cnh: e.target.value
            }
        )
    }
    atualizaDataVencimentoAso = (e) => {
        this.setState(
            {
                data_vencimento_aso: e.target.value
            }
        )
    }
    atualizaEmail = (e) => {
        this.setState(
            {
                email: e.target.value
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
        const funcionario = {
            user_id: this.state.user_id,
            nome: this.state.nome,
            nome_social: this.state.nome_social,
            numero_carteira: this.state.numero_carteira,
            data_nascimento: this.state.data_nascimento,
            data_ingresso: this.state.data_ingresso,
            cpf: this.state.cpf,
            rg: this.state.rg,
            numero_pis: this.state.numero_pis,
            titulo_numero: this.state.titulo_numero,
            genero: this.state.genero,
            funçao: this.state.funçao,
            data_vencimento_cnh: this.state.data_vencimento_cnh,
            data_vencimento_aso: this.state.data_vencimento_aso,
            email: this.state.email,
        };
        this.cadastrarFuncionario(funcionario);
        console.log(this.state.nome);
    }

    buscarFuncionario = () => {
        fetch(url)
            .then(response => response.json())
            .then(dados => {
                this.setState({ funcionario: dados })
            })
    }

    cadastrarFuncionario = (funcionario) => {
        fetch(
            url,
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(funcionario)
            }
        ).then(response => {
            if (response.ok) {
                this.buscarFuncionario();
                this.setState({ open: true, snackMessage: "Sucesso" });
            } else {
                this.setState({ open: true, snackMessage: "Opa, deu ruim", snackSeverity: "error" });
            }
        })
    }

    close = () => {
        this.setState({ open: false })
    }

    render() {
        return (
            <div className='outside'>
                <Snackbar
                    open={this.state.open}
                    message={this.state.snackMessage}
                    onClose={this.close}
                    severity={this.state.snackSeverity}
                />
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
                    }} > Cadastrar funcionário</p>
                    <div>
                        <div className='form-small'>
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Nome social"
                                helperText="Insira o nome que irá aparecer no sistema para o usuário"
                                // required
                                onChange={this.atualizaNomeSocial}
                                value={this.state.nome_social}
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Nome Completo"
                                // required
                                value={this.state.nome}
                                onChange={this.atualizaNome}
                                margin='normal'
                                variant="outlined"
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small'>
                            <ValidationTextField
                                label="N° da carteira de trabalho"
                                // required
                                value={this.state.numero_carteira}
                                onChange={this.atualizaNumeroCarteira}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                helperText="Data de nascimento"
                                type="date"
                                value={this.state.data_nascimento}
                                onChange={this.atualizaDataNascimento}
                                // required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                helperText="Data de Ingresso"
                                // required
                                value={this.state.data_ingresso}
                                onChange={this.atualizaDataIngresso}
                                type="date"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                label="Número do PIS"
                                // required
                                value={this.state.numero_pis}
                                onChange={this.atualizaNumeroPis}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small'>
                            <ValidationTextField
                                label="RG"
                                // required
                                value={this.state.rg}
                                onChange={this.atualizaRg}
                                type="number"
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                label="CPF"
                                // required
                                value={this.state.cpf}
                                onChange={this.atualizaCPF}
                                variant="outlined"
                                margin='normal'
                                // InputProps={{
                                //     inputComponent: TextMaskCustom,
                                // }}
                                className="validation-outlined-input"
                            />

                            <ValidationTextField
                                label="N° do Título de Eleitor"
                                // required
                                type="number"
                                value={this.state.titulo_numero}
                                onChange={this.atualizaTituloNumero}
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small-function'>
                            <Autocomplete
                                disablePortal
                                value={this.state.genero}
                                onChange={this.atualizaGenero}
                                id="define-genero"
                                options={gender}
                                sx={{ width: 225 }}
                                renderInput={(params) => <TextField {...params} label="Gênero" value={this.state.genero} />}
                            />
                            <Autocomplete
                                //padronizar a cor para a versão 2.0
                                disablePortal
                                value={this.state.funçao}
                                onChange={this.atualizaFunçao}
                                id="define-cargo"
                                options={cargo}
                                sx={{ width: 225 }}
                                renderInput={(params) => <TextField {...params} label="Função" />}
                            />
                        </div>
                        <div className='form-small'>
                            <ValidationTextField
                                helperText="Data de vencimento CNH"
                                sx={{ width: '35vh' }}
                                type="date"
                                value={this.state.data_vencimento_cnh}
                                onChange={this.atualizaDataVencimentoCnh}
                                // required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />                        <ValidationTextField
                                helperText="Data de vencimento ASO"
                                sx={{ width: '35vh' }}
                                type="date"
                                value={this.state.data_vencimento_aso}
                                onChange={this.atualizaDataVencimentoAso}
                                // required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='form-small-login'>
                            <ValidationTextField
                                label="Login"
                                // required
                                value={this.state.user_id}
                                onChange={this.atualizaUserId}
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                label="Senha"
                                type="password"
                                // required
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                            <ValidationTextField
                                label="Email"
                                // required
                                value={this.state.email}
                                onChange={this.atualizaEmail}
                                // sx={{ width: '28vh' }}
                                variant="outlined"
                                margin='normal'
                                className="validation-outlined-input"
                            />
                        </div>
                        <div className='button-enviar'>
                            {/* <DialogTaskSend/> */}
                            <Button className='btn-grad-form'
                                variant="outlined"
                                onClick={this.submit}
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
