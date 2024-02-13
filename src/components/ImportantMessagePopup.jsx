/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Tema personalizado
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#dd8ea4',
    },
  },
});

function ImportantMessagePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Temporizador para retrasar la apertura del diálogo
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000); // 3000 milisegundos = 3 segundos

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#fff',
            border: '2px solid #dd8ea4',
            boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
            borderRadius: '15px',
            padding: '20px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: theme.palette.primary.main, textAlign: 'center', fontWeight: 'bold' }}>
          ¡Importante!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ color: '#333', margin: '20px', fontSize: '1rem' }}>
            Recuerda mantener a tu mascota libre de pulgas, así nos ayudas a cuidar a otros perritos que vienen a la pelu. ¡Actualiza su comprimido o pipeta!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleClose} color="primary" autoFocus sx={{ textTransform: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default ImportantMessagePopup;
