import React from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    snack: {
        '& > *': {
            color: '#fff',
            backgroundColor: '#000000',
            position: 'fixed',
            bottom: '0',
            width: '280px',
            [theme.breakpoints.down('md')]: {
                bottom: '3rem'
            },
            [theme.breakpoints.down('sm')]: {
                bottom: '5rem'
            },
        }
    }
}))

const SnackBar = ({ open, setOpen }) => {
    const classes = useStyles()
    return (
        <Snackbar open={open} className={classes.snack}>
            <MuiAlert severity='success' onClose={() => setOpen(false)}>
                Message Sent Successfully
            </MuiAlert>
        </Snackbar>
    )
};

export default SnackBar;