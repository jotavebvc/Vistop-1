import { React, useState } from 'react';
import 'Scss/Procedimentos.scss';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container } from '@mui/material';
import { style } from '@mui/system';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { TouchableOpacity } from 'react-native-web';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DialogTaskProcessos from 'Components/DialogTaskProcessos.js';
import DialogTaskPragas from 'Components/DialogTaskPragas.js';

import Switch from '@mui/material/Switch';

const Procedimentos = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const goToHome = () => {
        navigate("/", { replace: true })
    }

    const goToProdutos = () => {
        navigate("/produtos", { replace: true })
    }

    const Submeter = () => {
        return (
            <span className='list-style'><CheckBoxIcon className='list-icon' />{input}</span>
        )
    }

    return (
        <div >
            <span className='text1'><strong>Processos & Produtos</strong></span>
            <Container className='buttons'>
                <Button variant='contained' style={{
                    backgroundColor: "rgb(90, 229, 182)",
                    width: '144px',
                    padding: '0px',

                }
                }
                    className='buttons-size' ><span><strong>PROCESSOS</strong></span></Button>
                <Button variant='outlined' onClick={goToProdutos} style={{
                    color: "rgb(71, 211, 164)",
                    borderColor: "rgb(90, 229, 182)",
                    width: '144px',
                    padding: '0px',
                }
                }  ><span> PRODUTOS</span></Button>
            </Container>
            <Container>
                {/* <TextField
                    variant='standard'
                    className='outlined-login-input'
                    label="Processo realizado"
                    onChange={handleInput}
                /> */}
                {/* <Button className='input-button'
                    variant="outlined"
                    onClick={Submeter}
                >
                    Registrar
                </Button> */}
            </Container>
            <Container className='list-class1'>
                <FormGroup>
                    <DialogTaskPragas />
                    <DialogTaskProcessos />
                    <DialogTaskProcessos />
                    <DialogTaskProcessos />
                    <DialogTaskProcessos />
                    {/* {/* <TouchableOpacity onPress={DialogTaskProcessos}>
                        <FormControlLabel control={<Checkbox />} label="Produto químico" />
                    </TouchableOpacity> */}
                </FormGroup>
            </Container>
            <div className='touchable-style'>
                <TouchableOpacity onPress={goToHome}>
                    <div className='list2'>
                        <div className='list-text'>
                            <span><strong>Comentar e enviar Relatório</strong></span>
                        </div>
                        <ArrowForwardIosIcon fontSize='small' className='setaIcon' />
                    </div>
                </TouchableOpacity>
            </div>
        </div>
    )
}

export default Procedimentos;