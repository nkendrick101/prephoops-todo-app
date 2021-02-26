import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle,  } from '@material-ui/core/';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import Signin from './Signin'

export interface SignInModalProps { }

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            width: 'fit-content',
        },
        formControl: {
            marginTop: theme.spacing(2),
            minWidth: 120,
        },
        formControlLabel: {
            marginTop: theme.spacing(1),
        },
    }),
);

function SignInModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMaxWidth(event.target.value as DialogProps['maxWidth']);
    };

    const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullWidth(event.target.checked);
    };
    return (
        <React.Fragment>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open max-width dialog
      </Button>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can set my maximum width and whether to adapt or not.
          </DialogContentText>
               <Signin />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default SignInModal;
