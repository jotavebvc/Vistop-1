import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'Scss/HomeAdm.scss';
import focusLogo from 'Images/focusLogo.jpg';
import { Container, Box, Alert } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import coolGraphs1 from 'Images/coolgraphs1.png';
import coolGraphs2 from 'Images/coolgraphs2.png';
import ArrowForwardIos from '@mui/icons-material/ArrowRightRounded';



const HomeAdm = (props) => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate()
    const goCadastroFuncionario = () => {
        navigate("/cadastro-funcionario", { replace: true })
    }
    const goToNaoConcluidas = () => {
        navigate("/nao-concluidas", { replace: true })
    }
    //     const navigate = useNavigate()

    //     const goToVistorias = () => {
    //         navigate("/", { replace: true })
    //     }
    //     const goToRotasAbertas = () => {
    //         navigate("/rotas-abertas", { replace: true })
    //     }
    //     const goToAgenda = () => {
    //         navigate("/agenda", { replace: true })
    //     }




    return (
        <div className='outside'>

            <div className='Side-bar' >
                <SideBar />
            </div>  
            {/* <p className='texto-home-adm'>Bem vindo, Kleber!</p> */}
            <Container fixed='true' style={{
                backgroundColor: 'white',
                bottom: '0',
                minHeight: '100%',
                height: '100vh'
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
                }} > Bem vindo!</p>
                <Alert variant="filled" severity="error" onClick={goToNaoConcluidas} onClose={() => {setOpen(false);}}>
                    2 VISTORIAS NÃO FORAM CONCLUÍDAS ONTEM.
                </Alert>
                <div className='graphs'>
                    <img src={coolGraphs1} alt='Gráfico demonstrativo 1 ' width={450}></img>
                    <img src={coolGraphs2} alt='Gráfico demonstrativo 2 ' width={450}></img>
                </div>
                <div className='logo-e-metas'>
                    <div className='metas'>
                        <p className='metas-title'>Metas para hoje</p>
                        <p className='metas-text'>֍Impressão dos planfetos da nova campanha <br></br>֍Divulgação da nossa campanha digital</p>
                    </div>
                    <img src={focusLogo} alt='Logo da empresa Focus' width={200}></img>
                </div>
            </Container>
        </div>
    )
}
export default HomeAdm;
