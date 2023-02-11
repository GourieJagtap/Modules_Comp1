import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Route, Router, Routes } from 'react-router';
import FirstItem from './Components/FirstItem';
import SecondItem from './Components/SecondItem';
import ThirdItem from './Components/ThirdItem';
import FourthItem from './Components/FourthItem';
import FifthItem from './Components/FifthItem';
import SixthItem from './Components/SixthItem';
import Routing from './Components/Routing';
import Sidebar from './Components/Sidebar';



const App = () => {

  const routes = [
    {
      name: 'FirstItem',
      path: '/',
      element:<FirstItem/>
    },
    {
      name: 'SecondtItem',
      path: '/SecondtItem',
      element:<SecondItem/>,
    },
    {
      name: 'ThirdItem',
      path: '/ThirdItem',
      element:<ThirdItem/>,
    },
    {
      name: 'FourthItem',
      path: '/FourthItem',
      element:<FourthItem/>,
    },
    {
      name: 'FiftItem',
      path: '/FiftItem',
      element:<FifthItem/>,
    },
    {
      name: 'SixthtItem',
      path: '/SixthItem',
      element:<SixthItem/>,
    },
  ];

  return (
    <Box container sx={{display:"flex",alignItems:"center",flexDirection:"column"}} >
      <Box sx={{py:5}}>
      <Typography variant='h2' >Lorem ipsum dolor sit amet</Typography>
      <Typography variant='h5'>Lorem ipsum dolor sit amet</Typography>
      </Box>
      <Grid container px={{xs:2,md:10,lg:20}}  >
        <Grid item xs={4}>
          <Paper elevation={2} sx={{p:3}}>
          <Sidebar routes={routes}/>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Routes>
            {routes.map((e)=>{
              return (
                <Route path={e.path} element={e.element}/>
              )
            })}
          </Routes>
        </Grid>
      </Grid>
      </Box>
  )
}

export default App