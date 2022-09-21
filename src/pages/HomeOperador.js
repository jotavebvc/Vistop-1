import { React } from 'react';
import { TouchableOpacity } from 'react-native-web'
import { useNavigate } from 'react-router-dom'
import 'Scss/HomeOperador.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EventIcon from '@material-ui/icons/Event';
import CommuteIcon from '@material-ui/icons/Commute';
import focusLogo from 'Images/focusLogo.jpg';


    const HomeOperador = (props) => {
    const navigate = useNavigate()

    const goToVistorias = () => {
        navigate("/", { replace: true })
    }
    const goToRotasAbertas = () => {
        navigate("/rotas-abertas", { replace: true })
    }
    const goToAgenda = () => {
        navigate("/agenda", { replace: true })
    }



    return (
        <div>
        <div className='minhas-rotas'>
            <TouchableOpacity onPress={goToRotasAbertas}
            // style={styles.button}>  
            >   
                <div className='image1'>
                    <CommuteIcon className='icon' />
                    {/* <img src={logo} alt='test image' width={50}></img> */}
                    <span><strong> MINHAS ROTAS</strong></span>
                    <ArrowForwardIosIcon fontSize='small' className='seta'/>
                </div>  
            </TouchableOpacity>
        </div>
        <div className='minhas-rotas2'>
            <TouchableOpacity onPress={goToAgenda}
            >   
                <div className='image2'>
                    <EventIcon className='icon'/>                    {/* <img src={logo} alt='test image' width={50}></img> */}
                    <span><strong> MINHA AGENDA</strong></span>
                    <ArrowForwardIosIcon fontSize='small' className='seta'/>
                </div>
            </TouchableOpacity>
        </div>
        <div className='logo-focus'>
                <img src={focusLogo} alt='Logo da empresa Focus' width={200}></img>
        </div>  
        </div>
    )
}

export default HomeOperador; 
