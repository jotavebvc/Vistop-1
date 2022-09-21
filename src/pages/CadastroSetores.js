import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'Scss/CadastroProduto.scss'
import { Container, Button } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';



const CadastroProduto = (props) => {
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
                }} > Cadastrar setores da empresa</p>
                <div>
                    <div className='form-small1'>
                        <Autocomplete
                            disablePortal
                            id="nome-cliente"
                            required
                            options={nomeCliente}
                            sx={{ width: 425 }}
                            renderInput={(params) => <TextField {...params} label="Nome do cliente" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="nome-cliente"
                            required
                            options={categoriaSetor}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Categoria do setor" />}
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="Nome do setor"
                            required
                            sx={{ width: '425vh' }}
                            variant="outlined"
                            margin='normal'
                            id="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>

                    </div>
                    <div className='button-enviar2'>
                        <Button className='btn-grad-form'
                            variant="outlined"
                            onClick={goToHomeAdm}
                        >
                            ENVIAR
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CadastroProduto;

const nomeCliente = [
    { label: 'Categoria 1', id: 1 },
    { label: 'Categoria 2', id: 2 },
    { label: 'Categoria 3', id: 3 },
    { label: 'Categoria 4', id: 4 },
    { label: 'Categoria 5', id: 5 },
];


const categoriaSetor = [
    { label: 'A', id: 1 },
    { label: 'B', id: 2 },
    { label: 'C', id: 3 },
    { label: 'D', id: 4 },
];