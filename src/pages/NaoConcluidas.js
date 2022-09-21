import { React } from 'react';
import { TouchableOpacity } from 'react-native-web';
import { Container } from '@mui/material';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LensIcon from '@mui/icons-material/Lens';
import SideBar from '../components/SideBar.js';


const NaoConcluidas = () => {
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
                }} >Vistorias não concluídas</p>
                <div>
                    <TouchableOpacity >
                        <div className='list'>
                            <div className='list-text'>
                                <span><strong> Alimentos LTDA</strong></span>
                                <div className='list-small-text'>
                                    <LensIcon fontSize='small' className='icon-small' />
                                    <span><small>Horário: 07:30h</small></span>
                                </div>
                            </div>
                            <ArrowForwardIosIcon fontSize='small' className='setaIcon' />
                        </div>
                    </TouchableOpacity>
                </div>
                <div>
                    <TouchableOpacity >
                        <div className='list'>
                            <div className='list-text'>
                                <span><strong> Comercial Bom Vizinho</strong></span>
                                <div className='list-small-text'>
                                    <LensIcon fontSize='small' className='icon-small' />
                                    <span><small>Horário: 07:30h</small></span>
                                </div>
                            </div>
                            <ArrowForwardIosIcon fontSize='small' className='setaIcon' />
                        </div>
                    </TouchableOpacity>
                </div>
            </Container>
        </div>

    )
}

export default NaoConcluidas;