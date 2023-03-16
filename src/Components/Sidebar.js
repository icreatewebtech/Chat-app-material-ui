import styled from '@emotion/styled';
import { Avatar, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import HeaderSidebar from './HeaderSidebar';

const Search = styled("div")(() => ({
    backgroundColor:"#3e3c61" , 
    padding:"8px 20px",
    borderRadius: "0px",
    display:"flex",
    alignItems:"center",
    borderBottom:"1px solid #ffffff2e",
}));

const Chatlist = styled(List)({
    height:"448px",
    overflowY:"scroll",
    '&::-webkit-scrollbar': {
        width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
        background:"rgba(0,0,0,.1)",
    },
    '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    }
});

function Sidebar() {
  return (
    <Box flex={1} sx={{background:"#3e3c61", borderRadius:"12px 0 0 12px", display:{xs:"none", sm:"block"}}}>   
        <HeaderSidebar />
        <Search> 
            <InputBase placeholder="Find a user" sx={{width:"100%", color:"#fff", fontWeight:"300", fontSize:"15px",}} /> 
        </Search>
        <Chatlist sx={{ width: '100%', color:"#fff !important"}}>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat1">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Remy Sharp" secondary="thanks" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{background:"#2f2d52"}}>
                <ListItemButton component="a" href="#chat2">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Cindy Baker" secondary="yeah" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat3">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Travis Howard" secondary="okay,call me" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat4">
                    <ListItemAvatar>
                        <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Agnes Walker" secondary="see you tomorrow" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat5">
                    <ListItemAvatar>
                        <Avatar alt="Halsey" src="https://mui.com/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Halsey" secondary="I'll let you know" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat6">
                    <ListItemAvatar>
                        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Trevor Henderson" secondary="I am still waiting" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat6">
                    <ListItemAvatar>
                        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Trevor Henderson" secondary="I am still waiting" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat6">
                    <ListItemAvatar>
                        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Trevor Henderson" secondary="I am still waiting" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat6">
                    <ListItemAvatar>
                        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Trevor Henderson" secondary="I am still waiting" color={"white"} />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#chat6">
                    <ListItemAvatar>
                        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Trevor Henderson" secondary="I am still waiting" color={"white"} />
                </ListItemButton>
            </ListItem>
        </Chatlist>
    </Box>
  );
}
;
export default Sidebar;