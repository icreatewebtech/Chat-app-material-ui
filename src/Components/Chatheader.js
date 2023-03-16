import styled from '@emotion/styled';
import { AppBar, Avatar, List, ListItem, ListItemAvatar, ListItemText, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
});

const Icons = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"15px",
    cursor:"pointer",
});

function Chatheader() {
  return (
    <AppBar position="sticky" sx={{borderRadius:{xs:"12px 12px 0 0", sm:"0 12px 0 0"}, background:"#5d5b8d", position:"relative",}}>
        <StyledToolbar position="relative">
            <List>
                <ListItem disablePadding sx={{cursor:"pointer",}}>
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Cindy Baker" secondary="Online" color={"white"} />
                </ListItem>
            </List>
            <Icons>
                <AddIcCallIcon />
                <PersonAddAltIcon />
                <MoreVertIcon />
            </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

;export default Chatheader;