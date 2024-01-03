import React, { useState } from 'react';
import { Button, Modal, Box } from '@mui/material';
import { Icon } from '@iconify/react';

function VideoButton({ videoId }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 430,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%', 
      }}
    >
      <Button
        variant="contained"
        onClick={handleOpen}
        startIcon={<Icon icon="mdi:video" style={{ fontSize: '24px' }} />}
        sx={{
          mt: 4, 
          width: '30%',
          borderRadius: '20px', 
          padding: '10px 20px', 
          textTransform: 'none', 
          backgroundColor: '#dd8ea4', 
          color: 'white', 
          ':hover': {
            backgroundColor: '#bc6c9c', 
          },
        }}
      >
        Ver Video
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-video-title"
        aria-describedby="modal-video-description"
      >
        <Box sx={modalStyle}>
          <iframe
            width="360"
            height="215"
            src={youtubeUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Box>
  );
}

export default VideoButton;
