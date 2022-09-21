import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SubMenu, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { React } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { useNavigate } from 'react-router-dom';
import 'Scss/SideBar.scss';



const SideBar = () => {
    const navigate = useNavigate()
    const goToHomeAdm = () => {
        navigate("/home-adm", { replace: true })
    }
    const goToAdmAgenda = () => {
        navigate("/agenda-adm", { replace: true })
    }
    const goToCadastroFuncionario = () => {
        navigate("/cadastro-funcionario", { replace: true })
    }
    const goToAgendaOperadoresAdm = () => {
        navigate("/agenda-operadores", { replace: true })
    }
    const goToCadastroCliente = () => {
        navigate("/cadastro-cliente", { replace: true })
    }
    const goToCadastroProduto = () => {
        navigate("/cadastro-produto", { replace: true })
    }
    const goToCadastroVistoria = () => {
        navigate("/cadastro-vistoria", { replace: true })
    }
    const goToCadastroFolgas = () => {
        navigate("/cadastro-folgas", { replace: true })
    }
    const goToCadastroSetores = () => {
        navigate("/cadastro-setores", { replace: true })
    }
    const goToConsultaSetores = () => {
        navigate("/consulta-setores", { replace: true })
    }   
    const goToConsultaClientes = () => {
        navigate("/consulta-clientes", { replace: true })
    } 
    const goToConsultaFuncionarios = () => {
        navigate("/consulta-funcionario", { replace: true })
    }
    const goToConsultaProduto = () => {
        navigate("/consulta-produto", { replace: true })
    }
    const goToConsultaVistoria = () => {
        navigate("/consulta-vistoria", { replace: true })
    }

    return (
        <ProSidebar className='react-pro-sidebar' >
            <SidebarHeader>
                <div
                    style={{
                        font: 'Lucida Sans',
                        padding: "24px",
                        textTransform: "uppercase",
                        fontWeight: 450,
                        fontSize: 18,
                        letterSpacing: "1px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}
                >
                    FOCUS ADM
                </div>
            </SidebarHeader>
            <Menu iconShape="hidden" style={{
                minHeight: '78vh',
                Height: "100%"
                // minHeight: "100%" 
            }}>
                <MenuItem onClick={goToHomeAdm} icon={<HomeIcon />}>Página inicial</MenuItem>
                <SubMenu title="Cadastrar" icon={<AssignmentIcon />}>
                    <MenuItem onClick={goToCadastroCliente}>Cadastrar cliente</MenuItem>
                    <MenuItem onClick={goToCadastroFuncionario}>Cadastrar funcionário</MenuItem>
                    <MenuItem onClick={goToCadastroProduto}>Cadastrar produto</MenuItem>
                    <MenuItem onClick={goToCadastroVistoria}>Cadastrar vistoria</MenuItem>
                    <MenuItem onClick={goToCadastroFolgas}>Cadastrar folgas do mês</MenuItem>
                    <MenuItem onClick={goToCadastroSetores}>Cadastrar setores</MenuItem>
                </SubMenu>
                <SubMenu title="Consulta/Edição" icon={<AssignmentIcon />}>
                    <MenuItem onClick={goToConsultaClientes}>Consulta/Edição cliente</MenuItem>
                    <MenuItem onClick={goToConsultaFuncionarios}>Consulta/Edição funcionário</MenuItem>
                    <MenuItem onClick={goToConsultaProduto}>Consulta/Edição produto</MenuItem>
                    <MenuItem onClick={goToConsultaVistoria}>Consulta/Edição vistoria</MenuItem>
                    <MenuItem onClick={goToConsultaSetores}>Consulta/Edição setores</MenuItem>
                </SubMenu>
                <SubMenu title="Agenda" icon={<EventIcon />} suffix="5">
                    <MenuItem onClick={goToAdmAgenda}>Minha Agenda</MenuItem>
                    <MenuItem onClick={goToAgendaOperadoresAdm}>Agenda dos Operadores</MenuItem>
                </SubMenu>
                <SubMenu title="Relatórios" icon={<InsertChartIcon />}>
                    <MenuItem>Relatórios por fucionário</MenuItem>
                    <MenuItem>Relatórios por mês</MenuItem>
                    <MenuItem>Relatórios por Empresa</MenuItem>
                </SubMenu>
            </Menu>
            {/* <SidebarFooter>
                <div
                    style={{
                        font: 'Lucida Sans',
                        padding: "24px",
                        paddingBottom: "0px",
                        paddingTop: "16px",
                        fontWeight: "normal",
                        fontSize: 13,
                        letterSpacing: "1px",
                        bottom: "0",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                    }}
                >
                    Desenvolvido em 2022
                </div>
            </SidebarFooter> */}
        </ProSidebar>
    )
}

export default SideBar;