import { React } from 'react';
import { useNavigate } from 'react-router-dom'
import 'Scss/BottomBar.scss';
import CommuteIcon from '@material-ui/icons/Commute';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';


const BottomBar = (props) => {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate("/login", { replace: true })
    }
    const goToHomeOperador = () => {
        navigate("/home-operador", { replace: true })
    }
    const goToRotasAbertas = () =>{
        navigate('/rotas-abertas', {replace: true} )
    }
    


return (
    <div className='bottom-bar' style={{
        position:'fixed',
        bottom: '0'
    }}>
        <AccountCircleIcon className='icon' onClick={goToLogin} />
        <HomeIcon className='icon' onClick={goToHomeOperador} />
        <CommuteIcon className='icon' onClick={goToRotasAbertas} />
    </div>
);
}

export default BottomBar;