import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'Scss/CadastroFuncionario.scss'
import { Container, Button } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { IMaskInput } from 'react-imask';
import DialogTaskSend from 'Components/DialogTaskSend.js';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// const CadastroFuncionario = (props) => {
// const navigate = useNavigate()
// const goToHomeAdm = () => {
//     navigate("/home-adm", { replace: true })
// }

const url = "https://vistapp-backend.herokuapp.com/funcionarios/"
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
    { label: "Operador", id: 1 },
    { label: 'Administração', id: 2 },
    { label: 'Gerência', id: 3 },
];

const gender = [
    { label: 'Masculino', id: 101, },
    { label: 'Feminino', id: 102 },
    { label: 'Outro', id: 103 },
];

const nomeCliente = [
    { label: 'costumer.userName', id: 1 },
    { label: 'jotavebvc', id: 2 }
];

// const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
//     const { onChange, ...other } = props;
//     return (
//         <IMaskInput
//             {...other}
//             mask="000.000.000-00"
//             inputRef={ref}
//             // overwrite
//         />
//     );
// });
export default class CadastroFuncionario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            nome: '',
            nome_social: '',
            numero_carteira: '',
            data_nascimento: '',
            data_ingresso: '',
            cpf: '',
            rg: '',
            numero_pis: '',
            titulo_numero: '',
            genero: '',
            funçao: '',
            data_vencimento_cnh: '',
            data_vencimento_aso: '',
            email: '',
        };
    };

    componentDidMount() {
          this.buscarFuncionario();
    }

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
                endereco_numero: e.target.value
            }
        )
    }
    atualizaCPF = (e) => {
        this.setState(
            {
                cep: e.target.value
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
    atualizaGenero = (e) => {
        this.setState(
            {
                genero: e.target.value
            }
        )
    }
    atualizaFunçao = (e) => {
        this.setState(
            {
                funçao: e.target.value
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
    atualizaLogin = (e) => {
        this.setState(
            {
                login: e.target.value
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

    submit = () => {
        const funcionario = {
            nome: this.state.nome,
            // login: this.state.login,
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
        console.log(this.state.nome)
    }

    change = () => {
            const funcionario = this.state.funcionario[this.state.funcionario.length -1];
            this.setState({
                nome: this.state.funcionario[this.state.funcionario.length -1].nome,
                nome_social: this.state.funcionario[this.state.funcionario.length -1].nome_social,
                numero_carteira: this.state.funcionario[this.state.funcionario.length -1].numero_carteira,
                data_nascimento: this.state.funcionario[this.state.funcionario.length -1].numero_carteira,
                data_ingresso: funcionario.data_ingresso,
                cpf: funcionario.cpf,
                rg: funcionario.rg,
                numero_pis: funcionario.numero_pis,
                titulo_numero: funcionario.titulo_numero,
                genero: funcionario.genero,
                funçao: funcionario.funçao,
                data_vencimento_cnh: funcionario.data_vencimento_cnh,
                data_vencimento_aso: funcionario.data_vencimento_aso,
                email: funcionario.email,
                // email: e.target.value,

            }
            )

    }


buscarFuncionario = () => {
    fetch(url)
        .then(response => response.json())
        .then(dados => {
            this.setState({ funcionario: dados })
        })
}

cadastrarFuncionario = (funcionario) => {
    fetch(url,
        {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(funcionario)
        })
        .then(response => {
            if (response.ok) {
                this.buscarFuncionario();

            } else {
                alert = ("Não foi possível.")
            }
            //   <DialogTaskSend />
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
                }} > Consulta/Edição Funcionário</p>
                <div>
                    <div className='form-small'>
                        <Autocomplete className='autocomplete-periodicidade'
                            disablePortal
                            id="periodicidade-id"
                            onChange={this.change}
                            options={nomeCliente}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="$get user.userName & selected data" />}
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Nome social"
                            helperText="Insira o nome que irá aparecer no sistema para o usuário"
                            required
                            onChange={this.atualizaNomeSocial}
                            value={this.state.nome_social}
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Nome Completo"
                            required
                            value={this.state.nome}
                            onChange={this.atualizaNome}
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="N° da carteira de trabalho"
                            required
                            value={this.state.numero_carteira}
                            onChange={this.atualizaNumeroCarteira}
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            helperText="Data de nascimento"
                            type="date"
                            value={this.state.data_nascimento}
                            onChange={this.atualizaDataNascimento}
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            helperText="Data de Ingresso"
                            required
                            value={this.state.data_ingresso}
                            onChange={this.atualizaDataIngresso}
                            type="date"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Número do PIS"
                            required
                            value={this.state.numero_pis}
                            onChange={this.atualizaNumeroPis}
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="RG"
                            required
                            value={this.state.rg}
                            onChange={this.atualizaRg}
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="CPF"
                            required
                            value={this.state.cpf}
                            onChange={this.atualizaCPF}
                            variant="outlined"
                            margin='normal'
                            // InputProps={{
                            //     inputComponent: TextMaskCustom,
                            // }}
                            id="validation-outlined-input"
                        />

                        <ValidationTextField
                            label="N° do Título de Eleitor"
                            required
                            type="number"
                            value={this.state.titulo_numero}
                            onChange={this.atualizaTituloNumero}
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small-function'>
                        <Autocomplete
                            disablePortal
                            value={this.state.genero}
                            getOptionSelected={(option, value) => option.genero === value.genero}
                            onChange={this.atualizaGenero}
                            id="define-genero"
                            options={gender}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Gênero" value={this.state.genero} />}
                        />
                        {/* <FormControl>
                            <FormLabel id="radio-button-gender">Gênero</FormLabel>
                            <RadioGroup
                                aria-labelledby="radio-button-gender-group"
                                defaultValue="Masculino"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                                <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                <FormControlLabel value="other" control={<Radio />} label="Outro" />
                            </RadioGroup>
                        </FormControl> */}
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
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />                        <ValidationTextField
                            helperText="Data de vencimento ASO"
                            sx={{ width: '35vh' }}
                            type="date"
                            value={this.state.data_vencimento_aso}
                            onChange={this.atualizaDataVencimentoAso}
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small-login'>
                        <ValidationTextField
                            // label="Login"
                            defaultValue ={'Login'}
                            required
                            value={this.state.login}
                            onChange={this.atualizaLogin}
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Senha"
                            type="password"
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Email"
                            required
                            value={this.state.email}
                            onChange={this.atualizaEmail}
                            // sx={{ width: '28vh' }}
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
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




