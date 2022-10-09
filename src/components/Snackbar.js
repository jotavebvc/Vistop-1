import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ open, autoHideDuration, message, severity }) {
  const [internalOpen, setOpen] = React.useState(open);
  const [internalMessage, setMessage] = React.useState(message);

  React.useEffect(() => {
    setOpen(open)
    setMessage(message)
  })

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={internalOpen} autoHideDuration={autoHideDuration || 6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity || 'info'} sx={{ width: '100%' }}>
          {internalMessage || ''}
        </Alert>
      </Snackbar>
    </Stack>
  );
}