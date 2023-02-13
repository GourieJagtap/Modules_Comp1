import { Grid, Paper, Typography,Card } from '@mui/material';
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
    <Box container >
      <Box component="grid" sx={{display:"flex",alignItems:"center",flexDirection:"column",py:5}}>
        <Grid item md={12} p={{xs:2,md:4}}  >
      <Typography variant='h2' sx={{fontWeight:"bold"}}>Lorem ipsum dolor sit amet</Typography>
      <Typography variant='h5'sx={{color:"#3B3B3B"}}>Lorem ipsum dolor sit amet</Typography>
      </Grid>
      </Box>
      <Grid container px={{xs:2,md:10,lg:18}} >
        <Grid item xs={3.5} >
          <Card sx={{px:2,py:4}} variant="outlined">
          <Sidebar routes={routes}/>
          </Card>
        </Grid>
        <Grid item xs={8.5} sx={{px:5,py:3}}>
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