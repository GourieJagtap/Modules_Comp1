import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Content = () => {
  return (
    <Box container sx={{height:"90px"}}>
        <Typography variant="h4" sx={{pb:3, fontWeight:"bold",}}>
        First Item Lorem ipsum dolor
        </Typography>
        <Typography variant='body1'>
         Libero nunc consequat interdum varius sit amet mattis vulputate enim. Felis donec et odio pellentesque diam. Enim nec dui nunc mattis. Suspendisse ultrices gravida dictum fusce ut placerat. Ipsum dolor sit amet consectetur adipiscing. Id neque aliquam vestibulum morbi blandit cursus risus at. Pellentesque sit amet porttitor eget.  Bibendum est ultricies integer quis auctor elit sed vulputate. Condimentum mattis pellentesque id nibh. Mauris pellentesque pulvinar pellentesque habitant morbi. Sed arcu non odio euismod.
        </Typography>
        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",p:2}}>
          <img src="https://images.livemint.com/img/2022/12/09/600x338/Nifty_1667546435835_1670548265677_1670548265677.jpg" ></img>
        </Box>
        <Typography variant='body1'>
         Libero nunc consequat interdum varius sit amet mattis vulputate enim. Felis donec et odio pellentesque diam. Enim nec dui nunc mattis. Suspendisse ultrices gravida dictum fusce ut placerat. Ipsum dolor sit amet consectetur adipiscing. Id neque aliquam vestibulum morbi blandit cursus risus at. Pellentesque sit amet porttitor eget. Sed vulputate odio ut enim blandit. Integer enim neque volutpat ac tincidunt vitae semper. Non blandit massa enim nec dui nunc. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Nulla pharetra diam sit amet nisl. Magna eget est lorem ipsum. Habitasse platea dictumst quisque sagittis purus. Arcu non sodales neque sodales ut etiam. Bibendum est ultricies integer quis auctor elit sed vulputate. Condimentum mattis pellentesque id nibh. Mauris pellentesque pulvinar pellentesque habitant morbi. Sed arcu non odio euismod.
        </Typography>

    </Box>
  )
}

export default Content