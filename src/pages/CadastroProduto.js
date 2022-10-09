import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'Scss/CadastroProduto.scss'
import { Container, Button } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import DialogTaskSend from 'Components/DialogTaskSend.js';



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
                }} > Cadastrar Produto</p>
                <div>
                    <div className='form-small1'>
                        <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Nome do Produto"
                            required
                            margin='normal'
                            variant="outlined"
                            className="validation-outlined-input"
                        />
                        <ValidationTextField
                            label="Código do Produto"
                            required
                            type="number"
                            variant="outlined"
                            margin='normal'
                            className="validation-outlined-input"
                        />
                    </div>
                    <div className='form-small'>
                    <ValidationTextField
                            sx={{ width: '45vh' }}
                            label="Descrição"
                            required
                            margin='normal'
                            variant="outlined"
                            className="validation-outlined-input"
                        />
                        <Autocomplete
                            disablePortal
                            id="categoria-produto"
                            required
                            options={categoriaProduto}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Categoria do produto" />}
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="Composição"
                            required
                            sx={{ width: '45vh' }}
                            variant="outlined"
                            margin='normal'
                            className="validation-outlined-input"
                        />
                    <Autocomplete
                            disablePortal
                            id="categoria-produto"
                            required
                            options={categoriaProduto}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Unidade de medida" />}
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="Precaução"
                            required
                            sx={{ width: '45vh' }}
                            variant="outlined"
                            margin='normal'
                            className="validation-outlined-input"
                        />
                    <Autocomplete
                            disablePortal
                            id="categoria-produto"
                            required
                            options={categoriaProduto}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Tipo de produto" />}
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="Antídoto"
                            required
                            sx={{ width: '45vh' }}
                            variant="outlined"
                            margin='normal'
                            className="validation-outlined-input"
                        />
                    <Autocomplete
                            disablePortal
                            id="categoria-produto"
                            required
                            options={categoriaProduto}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Tipo de produto" />}
                        />
                    </div>
                    <div className='form-small'>
                        <ValidationTextField
                            label="Lote"
                            required
                            sx={{ width: '45vh' }}
                            type="number"
                            variant="outlined"
                            margin='normal'
                            className="validation-outlined-input"
                        />
                        <ValidationTextField
                            helperText="Validade    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"
                            required
                            sx={{ width: '23vh' }}
                            type="date"
                            variant="outlined"
                            margin='normal'
                            className="validation-outlined-input"
                        />
                    </div>
                    <div className='button-enviar2'>
                    <DialogTaskSend/>
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

export default CadastroProduto;

const categoriaProduto = [
    { label: 'Categoria 1', id: 1 },
    { label: 'Categoria 2', id: 2 },
    { label: 'Categoria 3', id: 3 },
    { label: 'Categoria 4', id: 4 },
    { label: 'Categoria 5', id: 5 },
];