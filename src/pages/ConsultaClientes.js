import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'Scss/CadastroCliente.scss'
import { Container, Button, InputAdornment } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import DialogTaskSend from 'Components/DialogTaskSend.js';



const CadastroCliente = (props) => {
    const navigate = useNavigate()
    const goToHomeAdm = () => {
        navigate("/home-adm", { replace: true })
    }
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
                }} > Consulta/Edição Cliente</p>
                <div>
                    <div className='form-small'>
                    <Autocomplete className='autocomplete-periodicidade'
                            disablePortal
                            id="periodicidade-id"
                            options={nomeCliente}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="$get costumer.userName & selected data" />}
                        />     
                   </div>
                    <div className='form-small1'>
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Nome do cliente"
                            required
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Razão Social"
                            required
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                        {/* <ValidationTextField
                            label="N° do contrato"
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        /> */}
                        <ValidationTextField
                            label="N° do CNPJ"
                            sx={{ width: '45vh' }}
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            helperText="Data de cadastro"
                            sx={{ width: '45vh' }}
                            type="date"
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small1'>
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Bairro"
                            required
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Cidade"
                            required
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="Aliquota ISS"
                            sx={{ width: '45vh' }}
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Número"
                            sx={{ width: '45vh' }}
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        </div>
                    <div className='form-small1'>
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Endereço"
                            required
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="CEP"
                            required
                            margin='normal'
                            variant="outlined"
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small1'>
                        <ValidationTextField
                            label="Email de contato operacional"
                            sx={{ width: '45vh' }}
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Telefone de contato operacional"
                            sx={{ width: '45vh' }}
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="Email de contato finaceiro"
                            sx={{ width: '45vh' }}
                            required
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Telefone de contato financeiro"
                            sx={{ width: '45vh' }}
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            helperText="Data de cadastro"
                            sx={{ width: '45vh' }}
                            required
                            type="date"
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                        <ValidationTextField
                            required
                            label="Valor do contrato"
                            sx={{ width: '45vh' }}
                            type="number"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }} margin='normal'
                            id="validation-outlined-input"
                        />
                        </div>
                        <div className='form-small1'>
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Login"
                                required
                                margin='normal'
                                variant="outlined"
                                id="validation-outlined-input"
                            />
                            <ValidationTextField
                                sx={{ width: '45vh' }}
                                label="Senha"
                                required
                                margin='normal'
                                variant="outlined"
                                id="validation-outlined-input"
                            />
                    </div>
                    <div className='button-enviar1'>
                        <DialogTaskSend />
                        {/* <Button className='btn-grad-form'
                            variant="outlined"
                            onClick={goToHomeAdm}
                        >
                            ENVIAR
                        </Button> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CadastroCliente;
const nomeCliente = [
    { label: 'costumer.userName', id: 1 },
];