import { Container, Grid, styled, Paper } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import { React, useState } from 'react';
import Calendar from 'react-calendar';
import 'Scss/AgendaOperadores.scss';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import 'Scss/AgendaAdm.scss'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';  



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function AgendaOperadoresAdm() {


    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        moment.locale('pt-br');
    }
    return (
        <div className='outside'>
            <div>
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
                }}>Agenda dos Operadores</p>
                <div className='centro'>

                    <div className='minha-agenda1'>
                        <Autocomplete
                            disablePortal
                            id="lista-operadores"
                            options={listaOperador}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Operador" />}
                        />
                        <Calendar
                            value={dateState}
                            onChange={changeDate}
                        />
                        <div className='text-baixo-agenda1'>
                            <p>Tarefas para o dia <b>{moment(dateState).format('DD/MM/YYYY')}</b></p>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="֍Atendimento na Betania 09:00h" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="֍Treinamento 14:00h" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    <div className='minha-agenda1'>
                        <Autocomplete
                            disablePortal
                            id="lista-operadores"
                            options={listaOperador}
                            sx={{ width: 225 }}
                            renderInput={(params) => <TextField {...params} label="Operador" />}
                        />
                        <Calendar
                            value={dateState}
                            onChange={changeDate}
                        />
                        <div className='text-baixo-agenda1'>
                            <p>Tarefas para o dia <b>{moment(dateState).format('DD/MM/YYYY')}</b></p>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="֍Reunião com o adiminstração 08:00h" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary="֍Treinamento 14:00h" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

const listaOperador = [
    { label: 'Operador 1', cpf: 111111111 },
    { label: 'Operador 2', cpf: 222222222 },
    { label: 'Operador 3', cpf: 444444444 },
    { label: 'Operador 4', cpf: 555555555 },
    { label: 'Operador 5', cpf: 666666666 },
    { label: 'Operador 6', cpf: 777777777 },
    { label: 'Operador 7', cpf: 888888888 },
];