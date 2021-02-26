import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import { Flex, Box} from 'theme-ui';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export function NewTaskaction()  {
    const [ open, setOpen ] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
 <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Task</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           New Task
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
        <AddIcon  onClick={handleClickOpen}>

      </AddIcon>
        </div>

    )
}

export function ExitTaskaction()  {

  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>

    )
}

export function TaskActionsDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AddIcon onClick={handleClickOpen}>
        Slide in alert dialog
      </AddIcon>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Create A New Task</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           New Task
          </DialogContentText>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}


export default function TaskActionsNew() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
        <FormatListBulletedIcon  onClick={handleClickOpen}>
          Tasks
        </FormatListBulletedIcon>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Create A New Task</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
             New Task
            </DialogContentText>
            
          </DialogContent>
          <DialogActions>

              {/*BUTTON ACTIONS */}
          <Flex>
  <Box sx={{
      flex: '1 1 auto',
      borderRight: '1px solid #000',
      backgroundColor: '#000000',
      }}>
    Flex
  </Box>
  <Box
  sx={{
     flex: '1 1 auto',
      borderRight: '1px solid #000',
      backgroundColor: '#000000',
    }}>


  </Box>
</Flex>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
