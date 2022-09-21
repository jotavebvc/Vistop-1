import { React, useState, forwardRef } from 'react';
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

const CadastroFuncionario = (props) => {
    const navigate = useNavigate()
    const goToHomeAdm = () => {
        navigate("/home-adm", { replace: true })
    }
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

    const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="000.000.000-00"
                inputRef={ref}
            // overwrite
            />
        );
    });


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
                }} > Consulta funcionário</p>
                <div>
                    <div className='form-small'>
                        <Autocomplete className='autocomplete-periodicidade'
                            disablePortal
                            id="periodicidade-id"
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
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Nome Completo"
                            required
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="N° da carteira de trabalho"
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            helperText="Data de nascimento"
                            type="date"
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            helperText="Data de Ingresso"
                            required
                            type="date"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Número do PIS"
                            required
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
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="CPF"
                            required
                            variant="outlined"
                            margin='normal'
                            InputProps={{
                                inputComponent: TextMaskCustom,
                            }}
                            id="validation-outlined-input"
                        />

                        <ValidationTextField
                            label="N° do Título de Eleitor"
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small-function'>
                        <Autocomplete
                            disablePortal
                            id="define-genero"
                            options={gender}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Gênero" />}
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
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />                        <ValidationTextField
                            helperText="Data de vencimento ASO"
                            sx={{ width: '35vh' }}
                            type="date"
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small-login'>
                        <ValidationTextField
                            label="Login"
                            required
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
                            // sx={{ width: '28vh' }}
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='button-enviar'>
                        <DialogTaskSend />
                        {/* <Button className='btn-grad-form'
                            variant="outlined"
                            onClick={DialogTaskSend}
                        >
                            ENVIAR
                        </Button> */}
                    </div>
                </div>

            </Container>
        </div>
    )
}
export default CadastroFuncionario;



const cargo = [
    { label: 'Operador', id: 1 },
    { label: 'Administração', id: 2 },
    { label: 'Gerência', id: 3 },
];

const gender = [
    { label: 'Masculino', id: 101 },
    { label: 'Feminino', id: 102 },
    { label: 'Outro', id: 103 },
];
const nomeCliente = [
    { label: 'costumer.userName', id: 1 },
];