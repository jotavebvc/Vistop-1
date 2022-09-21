import { React } from 'react';
import { TouchableOpacity } from 'react-native-web';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import 'Scss/RotasAbertas.scss';
import { Button, Container } from '@mui/material';
import { style } from '@mui/system';
import LensIcon from '@mui/icons-material/Lens';


const RotasAbertas= () => {
    const navigate = useNavigate()

    const goToRotasFechadas = () => {
        navigate("/rotas-fechadas", { replace: true })
    }

    const goToRotaEscolhida = () => {
        navigate("/rota-escolhida", { replace: true })
    }

    return(
    <div >
        <span className='text1'><strong>MINHAS ROTAS</strong></span>   
        <Container className='buttons'>
            <Button variant='contained' style={{
                backgroundColor: "rgb(90, 229, 182)",
                width: '144px',
                padding: '0px',

            }
            }
            className='buttons-size' ><span><strong>ABERTAS</strong></span></Button>
            <Button variant='outlined' onClick={ goToRotasFechadas }  style={{
                color: "rgb(71, 211, 164)",
                borderColor: "rgb(90, 229, 182)",   
                width: '144px',
                padding: '0px',
            }
            }  ><span> Fechadas</span></Button>
        </Container>    
        <div>
            <TouchableOpacity onPress={goToRotaEscolhida}>   
                <div  className='list'>
                    <div className='list-text'>
                        <span><strong> Vistop</strong></span>
                        <div className='list-small-text'>
                            <LensIcon fontSize='small' className='icon-small'/>
                             <span><small>Horário: amanhã</small></span>
                             <LensIcon fontSize='small' className='icon-small'/>
                        </div>
                    </div>
                    <ArrowForwardIosIcon fontSize='small' className='setaIcon'/>
                </div>
            </TouchableOpacity>
        </div>
    </div>
    )
}

export default RotasAbertas;