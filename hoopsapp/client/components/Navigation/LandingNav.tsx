import React/* , { useState, useEffect } */ from 'react';
/* import { connect } from "pages/tasks /node_modules/react-redux";
import PropTypes from "prop-types"; */
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme,  makeStyles, createMuiTheme, withStyles } from '@material-ui/core/styles';
/* Modal components*/
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle,  } from '@material-ui/core/';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
/* import Signin from './Signin'
 */

/* import { login } from "../../store/auth/authActions";
import { UserValidator } from "../../services/UserValidator";
import { TextInput } from "../Form/FormElement";
import { PrimaryButton } from "../Button/Button";
import { Alert } from "../Alert/Alert";
import { useRouter } from "next/router";
import Link from "next/link";
import { SmallSpinner } from "../Spinner/Spinner"; */
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
/*component set */

import { Box, Flex, Card, Grid, Avatar, jsx } from 'theme-ui'
import { Typography } from '@material-ui/core/';


const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  authtab: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  authswitch: {
    backgroundColor: theme.palette.background.paper,
  },
  tabclip: {
    flexGrow: 1,
    maxWidth: 500,
    backgroundImage: 'url',
    border: '1px solid #fff',
    borderRadius: 1,

  },

  /* Styles applied to the root element if both `icon` and `label` are provided. */
  labelIcon: {
    minHeight: 72,
    paddingTop: 9,
    '& $wrapper > *:first-child': {
      marginBottom: 6
    }
  },

  /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
  textColorInherit: {
    color: 'inherit',
    opacity: 0.7,
    '&$selected': {
      opacity: 1
    },
    '&$disabled': {
      opacity: 0.5
    }
  },

  /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
  textColorPrimary: {
    color: '#fff',
    '&$selected': {
      color: '#fff'
    },
    '&$disabled': {
      color: '#fff',
    }
  },

  /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
  textColorSecondary: {
    color: '#ffff',
    '&$selected': {
      color: '#fff'
    },
    '&$disabled': {
      color: '#fff',
    }
  },

  /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
  selected: {
    backgroundColor: '#BF0A30',
  },

  /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
  disabled: {
    backgroundColor: '#BF0A30',
  },

  /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
  fullWidth: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: 'none'
  },

  /* Styles applied to the root element if `wrapped={true}`. */
  wrapped: {
    fontSize: tabtheme.typography.pxToRem(12),
    lineHeight: 1.5
  },

  /* Styles applied to the `icon` and `label`'s wrapper element. */
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column'
  },
  tab: {
    backgroundColor: '#BF0A30',
    color: '#fff',
    flex: '1 1 auto',

    width: '100%',
    height: '10%'
  },

}));
const tabtheme = createMuiTheme({
  palette: {
    primary: {
     main: '#FFF',

    },
   secondary: {
      main: '#002868',
    },
  },
});

export function SignInModal() {
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
              SignIn
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
             {/* <Signin /> */}
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
export function SignupModal() {
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

export default function LandingNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const AccountIcon = "";
  const RegisterIcon = "";
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.authtab}>
    <div className={classes.authswitch}>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
        <AntTab label="Tab 1" />
        <AntTab label="Tab 2" />
        <AntTab label="Tab 3" />
      </AntTabs>
      <Typography className={classes.padding} />
    </div>

  </div>



  );
}

export function SimpleLandingNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const AccountIcon = "";
  const RegisterIcon = "";
  return (
<div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor='secondary'
        textColor="primary"
        aria-label="icon label tabs example"
        className={classes.tab}
      >

     <Grid
  gap={2}
  columns={[2, '1fr ']}>
  <Box bg='muted'>
    <Paper className={classes.tabclip}>

    </Paper>
  <Tab className={classes.tab} icon={
    <Avatar sx={{
      width: 48,
      height: 48,
      borderRadius: 0,
    }} src={ AccountIcon}/> } label="SIGN IN" />
  </Box>
  <Box bg='muted'>
  <Paper className={classes.tabclip}>
  <Tab className={classes.tab}
  icon={  <Avatar sx={{
    width: 48,
    height: 48,
    borderRadius: 0,
  }}src={ AccountIcon}/>}
  label="SIGNUP" />
      </Paper>

  </Box>

</Grid>

      </Tabs>


    </div>

  );
}
