import { Drawer, Grid, ListItem, MenuItem, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';


// const drawerItems=["firstItem","SecondItem","ThirdItem"];
const pages = ["firstItem","firstItem","firstItem","firstItem","firstItem",];

const Sidebar = (props) => {

  const links= props.routes.map((i)=>{
    return (<li><ListItem component="li"><Link key={i.name} to={i.path}>{i.name}</Link></ListItem></li>)
  })

  return (
    <Box container >
      <ol>
      {links}
      </ol>
    </Box>
  )
}

export default Sidebar