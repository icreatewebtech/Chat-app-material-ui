import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
});

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    cursor:"pointer",
});

function HeaderSidebar() {
  return (
    <AppBar position="inherit" sx={{borderRadius:"12px 0 0 0", background:"#2f2d52", position:"relative",}}>
        <StyledToolbar position="relative">
            <PetsIcon sx={{display:{md:"block", lg:"block"}}} />
            {/* <Typography variant="h6" sx={{display:{xs:"none", sm:"none", md:"none", lg:"block"}}}>
                iC Chat
            </Typography> */}
            
            <UserBox sx={{display:{md:"flex", lg:"none"}}}>
                <Avatar sx={{width:"30", height:"30", cursor:"pointer"}} src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                <PowerSettingsNewIcon />
            </UserBox>
            <UserBox sx={{display:{xs:"none", sm:"none", md:"none", lg:"flex"}}} >
                <Avatar sx={{width:"30", height:"30"}} src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  /> 
                <Typography variant="span">
                    Rajay
                </Typography>
                <PowerSettingsNewIcon />
            </UserBox>
            {/* <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={true}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
            </Menu> */}
        </StyledToolbar>
        
    </AppBar>
  )
}

export default HeaderSidebar;