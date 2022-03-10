import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Send } from '@mui/icons-material';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=''>
      <Button variant="contained" className='BtnBookNow' onClick={handleOpen}><EventAvailableIcon /> BOOK NOW</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className='modalBookNow'>
            <Typography className='text-center' id="transition-modal-title" variant="h4" component="h2">
              Booking form
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Please, fill all the form below so that we could build your travel ...
            </Typography>

            <Typography>
              <div className="button-action">
                <button type="button" className="bouton-expertise"><a href="ok"> <DoNotDisturbOnIcon /> Cancel </a></button>
                <button type="button" className="bouton-expertise droite-btn"><a href="ok">Send my request<Send /> </a></button>
              </div>
            </Typography>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
