import { React } from 'react';
import { TouchableOpacity } from 'react-native-web';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import 'Scss/RotasFechadas.scss';
import { Button, Container } from '@mui/material';
import { style } from '@mui/system';
import LensIcon from '@mui/icons-material/Lens';


const RotasAbertas= () => {
    const navigate = useNavigate()

    const goToRotasAbertas = () => {
        navigate("/rotas-abertas", { replace: true })
    }

    return(
    <div >
        <span className='text'><strong>MINHAS ROTAS</strong></span>   
        <Container className='buttons'>
            <Button variant='outlined' onClick={ goToRotasAbertas} style={{
                color: "rgb(71, 211, 164)",
                borderColor: "rgb(90, 229, 182)",   
                width: '144px',
                padding: '0px',

            }
            }
            className='buttons-size' ><span>ABERTAS</span></Button>
            <Button variant='contained' style={{
                backgroundColor: "rgb(90, 229, 182)",
                width: '144px',
                padding: '0px',
            }
            }  ><span><strong>Fechadas</strong></span></Button>
        </Container>
        <div>
            <TouchableOpacity>   
                <div  className='list2'>
                    <div className='list-text'>
                        <span><strong> Alimentos LTDA</strong></span>
                        <div className='list-small-text'>
                            <LensIcon fontSize='small' className='icon-small'/>
                             <span><small>Data: 09/02/2022</small></span>
                        </div>
                    </div>
                    <ArrowForwardIosIcon fontSize='small' className='setaIcon'/>
                </div>
            </TouchableOpacity>
        </div>
        <div>
            <TouchableOpacity>   
                <div  className='list2'>
                    <div className='list-text'>
                        <span><strong> Alimentos LTDA</strong></span>
                        <div className='list-small-text'>
                            <LensIcon fontSize='small' className='icon-small'/>
                             <span><small>Data: 09/02/2022</small></span>
                             {/* <LensIcon fontSize='small' className='icon-small'/> */}
                             {/* <span ><small>                                   Previsão: 03:30h</small></span> */}
                        </div>
                    </div>
                    <ArrowForwardIosIcon fontSize='small' className='setaIcon'/>
                </div>
            </TouchableOpacity>
        </div>
        <div>
            <TouchableOpacity>   
                <div  className='list2'>
                    <div className='list-text'>
                        <span><strong> Alimentos LTDA</strong></span>
                        <div className='list-small-text'>
                            <LensIcon fontSize='small' className='icon-small'/>
                             <span><small>Data: 09/02/2022</small></span>
                             {/* <LensIcon fontSize='small' className='icon-small'/> */}
                             {/* <span ><small>                                   Previsão: 03:30h</small></span> */}
                        </div>
                    </div>
                    <ArrowForwardIosIcon fontSize='small' className='setaIcon'/>
                </div>
            </TouchableOpacity>
        </div>
        <div>
            <TouchableOpacity>   
                <div  className='list2'>
                    <div className='list-text'>
                        <span><strong> Alimentos LTDA</strong></span>
                        <div className='list-small-text'>
                            <LensIcon fontSize='small' className='icon-small'/>
                             <span><small>Data: 09/02/2022</small></span>
                             {/* <LensIcon fontSize='small' className='icon-small'/> */}
                             {/* <span ><small>                                   Previsão: 03:30h</small></span> */}
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