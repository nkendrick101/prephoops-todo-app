import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, } from '@material-ui/core/';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';


export interface ModalAuthProps { }

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

function ModalAuth() {
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
                    <form className={classes.form} noValidate>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                            <Select
                                autoFocus
                                value={maxWidth}
                                onChange={handleMaxWidthChange}
                                inputProps={{
                                    name: 'max-width',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value={false as any}>false</MenuItem>
                                <MenuItem value="xs">xs</MenuItem>
                                <MenuItem value="sm">sm</MenuItem>
                                <MenuItem value="md">md</MenuItem>
                                <MenuItem value="lg">lg</MenuItem>
                                <MenuItem value="xl">xl</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            className={classes.formControlLabel}
                            control={<Switch checked={fullWidth} onChange={handleFullWidthChange} />}
                            label="Full width"
                        />
                    </form>
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

export default ModalAuth;
