import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function VistopSnackbar({ open, autoHideDuration, message, severity, onClose }) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={autoHideDuration || 6000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity || 'info'} sx={{ width: '100%' }}>
          {message || ''}
        </Alert>
      </Snackbar>
    </Stack>
  );
}