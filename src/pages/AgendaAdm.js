import { Container } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import SideBar from '../components/SideBar.js';
import { React, useState } from 'react';
import Calendar from 'react-calendar';
import 'Scss/Agenda.scss';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import 'Scss/AgendaAdm.scss'
import DialogTask from 'Components/DialogTask.js';

export default function AgendaAdm() {


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
                }}>Minha Agenda</p>
                <div className='centro1'>

                    <div className='minha-agenda'>
                        <Calendar
                            value={dateState}
                            onChange={changeDate}
                        />
                    </div>
                    <div className='text-baixo-agenda'>
                        <p>Tarefas para o dia <b>{moment(dateState).format('DD/MM/YYYY')}</b></p>
                        <p>֍Seleção de funcionários para o prêmio destaque do mês</p>
                        <p>֍Reunião com o financeiro</p>
                        <p>֍Treinamento com os operadores</p>
                    </div>¬
                    <div>
                    <DialogTask />
                    </div>

                </div>
            </Container>
        </div>
    )
}