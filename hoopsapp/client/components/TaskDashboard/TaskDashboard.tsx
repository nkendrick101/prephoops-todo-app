import React from 'react';
import { Flex, Box } from 'theme-ui';
import  TaskdsLayout  from './TaskdsLayout'

function TaskDashboard() {
    return (

<TaskdsLayout>
<Flex>
  <Box p={2} bg='primary' sx={{
      flex: '1 1 auto',
      borderRight: '1px solid #000',
      backgroundColor: '#000000',
      minHeight: 9
      }}>
    Flex
  </Box>
  <Box
  sx={{
    flex: '1 1 auto',
    borderRight: '1px solid #000',
    }}>


  </Box>
</Flex>
</TaskdsLayout>



    );
}

export default TaskDashboard;

