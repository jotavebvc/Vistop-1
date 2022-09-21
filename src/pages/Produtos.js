import { React, useState } from 'react';
import 'Scss/Procedimentos.scss';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container } from '@mui/material';
import { style } from '@mui/system';
import { TouchableOpacity } from 'react-native-web';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';

const Produtos = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const goToHome = () => {
        navigate("/", { replace: true })
    }
    const goToProcessos = () => {
        navigate("/processos", { replace: true })
    }

    const Submeter = () => {
        return (
            <span className='list-style'><ContentPasteGoIcon className='list-icon' />{input}</span>
        )
    }

    return (
        <div >
            <span className='text1'><strong>Processos & Produtos</strong></span>
            <Container className='buttons'>
                <Button variant='outlined' onClick={goToProcessos} style={{
                    color: "rgb(71, 211, 164)",
                    borderColor: "rgb(90, 229, 182)",
                    width: '144px',
                    padding: '0px',

                }
                }
                    className='buttons-size' ><span><strong>PROCESSOS</strong></span></Button>
                <Button variant='contained' style={{
                    backgroundColor: "rgb(90, 229, 182)",
                    width: '144px',
                    padding: '0px',
                }
                }  ><span> PRODUTOS</span></Button>
            </Container>
            <Container>
                <TextField
                    variant='standard'
                    className='outlined-login-input'
                    label="Processo realizado"
                    onChange={handleInput}
                />
                {/* <Button className='input-button'
                    variant="outlined"
                    onClick={Submeter}
                >
                    Registrar
                </Button> */}
            </Container>
            <Container className='list-class1'>
                <span className='list-style'><ContentPasteGoIcon className='list-icon' />1 Placa Adesiva p/ baratas</span>
                <Submeter />
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

export default Produtos;