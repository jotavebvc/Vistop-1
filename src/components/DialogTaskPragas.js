import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { TouchableOpacity } from 'react-native-web'
import BugReport from '@material-ui/icons/BugReport';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
export default function DialogTaskPragas() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
                 setOpen(true);  
    };
    const handleClose = () => {
        setOpen(false);
    };
    const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': { 
            borderColor: 'gray',
            borderWidth: 1,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    });

    return (
        <div style={{
            paddingTop: '2vh'
        }}>
            <Button variant="outlined" onClick={handleClickOpen} style={{
                color: 'rgb(63, 182, 142)',
                borderColor: 'rgb(63, 182, 142)',
                borderWidth: '2px',
            }}>
                <BugReport fontSize='small' className='setaIcon' />
                Pragas encontradas
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                <div>
                    {/* <DialogTitle id="dialog-pragas-title">
                        {"Focos de barata encontrados"}
                    </DialogTitle> */}
                    <ValidationTextField
                        // label="Produto utilizado"
                        // sx={{ width: '55vh' }}
                        required
                        label="Focos de barata encontrados"
                        variant="outlined"
                        margin='normal'
                        id="task"
                    />
                    </div>
                    {/* <DialogTitle id="dialog-pragas-title">
                        {"Focos de rato encontrados: "}
                    </DialogTitle> */}
                    <ValidationTextField
                        // label="Quantidade utilizada"
                        // sx={{ width: '55vh' }}
                        label="Focos de rato encontrados"
                        required
                        type="number"
                        variant="outlined"
                        margin='normal'
                        id="task"
                    />
                    <div>
                    {/* <DialogTitle id="dialog-pragas-title">
                        {"Focos de x encontrados: "}
                    </DialogTitle>   */}
                        <ValidationTextField
                            // sx={{ width: '55vh' }}
                            required
                            
                            // label="Concentração utilizada"
                            variant="outlined"
                            margin='normal'
                            id="task"
                        />
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
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}