



import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Card, Divider } from 'theme-ui';




{/* Task Cards */}
interface TaskCardsViewProps {
    children?: React.ReactNode;

  }

  function TaskCardsView(TaskCardProps: TaskCardsViewProps) {
    // eslint-disable-next-line no-unused-vars
    const { children } = TaskCardProps;

    return (
        <div>
        <TaskCardsView>
          <TaskCards  />

        </TaskCardsView>



       {/*  Will Become Task Modal */}
       {/*  <TaskSplitView value={value} index={0}>
         TASK View
        </TaskSplitView> */}

      </div>
    );
  }


{/* END TASK CARDS View */}
{/* Task Card */}
interface TaskCardsProps {
    children?: React.ReactNode;

  }
// eslint-disable-next-line no-unused-vars
export  function TaskCards(TaskCardProps:TaskCardsProps) {

    /* const [value, setValue] = React.useState(0); */

    /* const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    }; */


    return (
<Card />
    );
  }



{/* End Task Card */}



{/* Task Split View  */}

interface TaskSplitViewProps {
  children?: React.ReactNode;
  index: any;
    value: any;

}

function TaskSplitView(props: TaskSplitViewProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tasksplitview"
      hidden={value !== index}
      id={`vertical-tasksplitview-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (


  <Box p={3}>
  <Typography>{children}</Typography>
</Box>

      )}
    </div>
  );
}

function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme: Theme) => ({
    taskdashboardview: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    taskview: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    tasksplitview: {
        width: '100%',
        height: '100%',
      },
  }));





export default function TaskView() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.taskdashboardview}>
         <Container>
              <TaskCardsView />
              </Container>
              <Divider />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.taskview}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TaskSplitView value={value} index={0}>
       TASK View
      </TaskSplitView>
      {/* <TaskSplitView value={value} index={0}>
        Item One
      </TaskSplitView>
      <TaskSplitView value={value} index={1}>
        Item Two
      </TaskSplitView>
      <TaskSplitView value={value} index={2}>
        Item Three
      </TaskSplitView>
      <TaskSplitView value={value} index={3}>
        Item Four
      </TaskSplitView>
      <TaskSplitView value={value} index={4}>
        Item Five
      </TaskSplitView>
      <TaskSplitView value={value} index={5}>
        Item Six
      </TaskSplitView>
      <TaskSplitView value={value} index={6}>
        Item Seven
      </TaskSplitView> */}
    </div>
  );
}
