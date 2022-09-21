import { React, useState } from 'react';
import Calendar from 'react-calendar';
import 'Scss/Agenda.scss';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

export default function Agenda() {


  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
    moment.locale('pt-br');
  }
  return (
    <div>
      <span className='text-agenda'>Minha Agenda</span>
      <div className='minha-agenda'>
        <Calendar
          value={dateState}
          onChange={changeDate}
        />
      </div>
      <p className='text-baixo-agenda'>Tarefas para o dia <b>{moment(dateState).format('DD/MM/YYYY')}</b></p>
    </div>
  )
}