import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useNavigate } from 'react-router-dom'
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { TouchableOpacity } from 'react-native-web'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export default function DialogTaskProcessos() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const navigate = useNavigate()
    const goToHomeAdm = () => {
        setOpen(false)
        navigate("/home-adm", { replace: true })
    }
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
            <Button variant="outlined" onClick={handleClickOpen}  className='btn-grad-form'
            //  style={{
            //     color: 'rgb(63, 182, 142)',
            //     borderColor: 'rgb(63, 182, 142)',
            //     borderWidth: '2px',
            // }}
            >
                {/* <ArrowForwardIosIcon fontSize='small' className='setaIcon' /> */}
                Enviar
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                <div>
                    <spam>Cadastro salvo com sucesso.</spam>
               </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={goToHomeAdm} autoFocus style={{
                        color: 'rgb(63, 182, 142)',
                        borderColor: 'rgb(63, 182, 142)',
                        borderWidth: '2px',
                    }}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}