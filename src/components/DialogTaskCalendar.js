import * as React from 'react';
import { useState } from 'react';
import moment from 'moment'
import Calendar from 'react-calendar'; import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export default function DialogTaskCalendar() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e)
        moment.locale('pt-br');
    } 

    return (
        <div style={{
            paddingTop: '2vh'
        }}>
            <Button variant="outlined" onClick={handleClickOpen} style={{
                color: 'rgb(63, 182, 142)',
                borderColor: 'rgb(63, 182, 142)',
                borderWidth: '2px', 
            }}>
                Cadastrar folga
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Sinalize a folga:"}
                </DialogTitle>
                <DialogContent>
                    <div>

                        <div>
                            <Calendar
                                value={dateState}
                                onChange={changeDate}
                            />
                        </div>
                        <p>Folga para o dia: <b>{moment(dateState).format('DD/MM/YYYY')}</b></p>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{
                        color: 'rgb(63, 182, 142)',
                        borderColor: 'rgb(63, 182, 142)',
                        borderWidth: '2px',
                    }}>Cancelar</Button>
                    <Button onClick={handleClose} autoFocus style={{
                        color: 'rgb(63, 182, 142)',
                        borderColor: 'rgb(63, 182, 142)',
                        borderWidth: '2px',
                    }}>
                        Cadastrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );                                                          
}