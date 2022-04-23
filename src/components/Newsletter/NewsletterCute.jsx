import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
// import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';





function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function NewsletterCute() {
    //Newsletter toastify setting
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Great! You have been subscribed', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { email, Lastname } = data;
        try {
            // Disable form while processing submission
            setDisabled(true);

            // Define template params
            const templateParams = { email, Lastname };

            emailjs.send('service_wbcqhdh', 'template_copj82l', templateParams, 'GwFaGFV-0KNwOLU8T')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });

            // Reset contact form fields after submission
            reset();
            // Display success toast
            toastifySuccess();
            // Re-enable form submission
            setDisabled(false);

            //Close the dialog after submission of the form
            handleCloseDialog(true);

        } catch (e) {
            console.log(e);
        }
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseDialog = () =>{
        setOpen(false)
    };


    return (
        <div>
            <div className="ok">
                <Button variant="outlined" onClick={handleClickOpen} className="BtnBookNow">
                <ForwardToInboxIcon />  &nbsp; Subscribe to our Newsletter
                </Button>
                <div className="dialogNewletter">
                    <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
                        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                                Subscribe
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>

                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField fullWidth
                                            label="Lastname"
                                            id="fullWidth"
                                            margin="normal"
                                            type="text"
                                            name='Lastname'
                                            {...register('Lastname', {
                                                required: {
                                                    value: true,
                                                    message: 'Please enter your Lastname'
                                                },
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Please use 15 characters or less'
                                                }
                                            })}
                                        />
                                        {errors.Lastname && <span className='errorMessage'>{errors.Lastname.message}</span>}

                                    </Box>

                                    <Box
                                        sx={{
                                            width: 500,
                                            maxWidth: '100%',
                                        }}
                                    >
                                        <TextField fullWidth
                                            label="Your email"
                                            id="fullWidth"
                                            margin="normal"
                                            type="email"
                                            {...register('email', {
                                                required: true,
                                                pattern:
                                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })}
                                            name="email"
                                        />
                                        {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
                                    </Box>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button 
                                    variant='outlined' 
                                    color='error' 
                                    autoFocus 
                                    onClick={handleClose}
                                    startIcon = {<CancelIcon />}
                                    
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant='contained'
                                    color='success'
                                    type="submit"
                                    endIcon={<SendIcon />}
                                    onClick={handleSubmit}
                                    disabled={disabled}
                                >
                                    Subscribe</Button>

                                {/* <Box>
                                <LoadingButton
                                    size="medium"
                                    onClick={handleClick}
                                    endIcon={<SendIcon />}
                                    loading={loading}
                                    loadingPosition="end"
                                    variant="contained"
                                >
                                    Subscribe
                                    </LoadingButton>

                                </Box> */}

                            </DialogActions>

                        </form>
                    </Dialog>

                </div>

            </div>


        </div>
    );
}
