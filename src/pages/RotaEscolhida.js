import { React } from 'react';
import imagemMaps from 'Images/imagemMaps.png'
import 'Scss/RotaEscolhida.scss'
import { useNavigate } from 'react-router-dom';
import { Button, Container } from '@mui/material';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { TouchableOpacity } from 'react-native-web';
import { style } from '@mui/system';



const RotaEscolhida = () => {

    const navigate = useNavigate()
    

    const goToProcessos = () => {
        navigate("/processos", { replace: true})
    }

    // const goToMaps = () => {
    //     navigate("/google-maps", { replace: true })
    // }


    return (
        <div className='rota-escolhida'>
            <Container>
                <span className='rota-escolhida-texto'>Alimentos LTDA</span>
                <span className='rota-escolhida-endereço'><small>Rua Floriano Peixoto, 471</small></span>
            </Container>
            <img src={imagemMaps} alt='imagem do google maps' className='imagemMaps' />
            <div className='my-button'>
                <Button>
                    Abrir no Google Maps <AddLocationAltIcon className='icon-interno' fontSize='large'/>
                </Button>
            </div>
            <div className='touchable-style1'>
                <TouchableOpacity onPress={goToProcessos}>
                    <div className='list2'>
                        <div className='list-text'>
                            <span><strong>Cheguei ao destino!</strong></span>
                        </div>
                        <ArrowForwardIosIcon fontSize='small' className='setaIcon' />
                    </div>
                </TouchableOpacity>
            </div>
        </div>
    )
}



export default RotaEscolhida;   