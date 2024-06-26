import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'Scss/CadastroVistoria.scss'
import { Container, Button, InputAdornment } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import DialogTaskCalendar from 'Components/DialogTaskCalendar.js';
import DialogTaskSend from 'Components/DialogTaskSend.js';




const CadastroFolgas = (props) => {
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
                }} > Cadastrar folgas do mês</p>
                <div>
                    <div className='form-small1'>
                        <Autocomplete
                            disablePortal
                            id="cliente-id" 
                            required
                            options={listaOperador}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Colaborador" />}
                        />
                        <DialogTaskCalendar />
                    </div>
                    <div className='button-enviar3' style={{
                        paddingTop: "50vh"
                    }}>
                          <DialogTaskSend/>
                        {/* <Button className='btn-grad-form'
                            variant="outlined"      
                            onClick={goToHomeAdm}
                        >
                            VOLTAR
                        </Button> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CadastroFolgas;

const cliente = [
    { label: 'Empresa 1', id: 1 },
    { label: 'Empresa 2', id: 2 },
    { label: 'Empresa 3', id: 3 },
    { label: 'Cliente 1', id: 4 },
    { label: 'Empresa 5', id: 5 },
];

const listaOperador = [
    { label: 'Operador 1', cpf: 111111111 },
    { label: 'Operador 2', cpf: 222222222 },
    { label: 'Operador 3', cpf: 444444444 },
    { label: 'Operador 4', cpf: 555555555 },
    { label: 'Operador 5', cpf: 666666666 },
    { label: 'Operador 6', cpf: 777777777 },
    { label: 'Operador 7', cpf: 888888888 },
];

const periodicidadeVistoria = [
    { label: 'A cada 7 dias(semanalmente)', id: 11 },
    { label: 'A cada 14 dias', id: 12 },
    { label: 'A cada 28 dias(1 vez no mês)', id: 13 },
    { label: 'Trimestralmente(a cada 74 dias)', id: 14 },
    { label: 'Quarta e domingo', id: 15 },
    { label: 'Segunda a sábado', id: 16 },
    { label: 'Todo dia', id: 11 },
    { label: 'Apenas quando solicitado', id: 15 },
];