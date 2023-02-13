import { Drawer, Grid, ListItem, MenuItem, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"


const Sidebar = (props) => {

  const links= props.routes.map((i)=>{
    return (<li style={{padding:"8px",fontWeight:"800",fontSize:"20px"}}><NavLink style={{color: 'Black', textDecoration: 'none',fontWeight:"700" }} key={i.name} to={i.path}>{i.name}</NavLink></li>)
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