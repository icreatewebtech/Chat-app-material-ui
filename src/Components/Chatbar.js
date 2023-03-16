import styled from '@emotion/styled';
import { Avatar, Button, ImageList, ImageListItem, InputBase, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react'
import Chatheader from './Chatheader';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

const Search = styled("div")(() => ({
  backgroundColor:"#fff" , 
  padding:"18px 20px",
  display:"flex",
  alignItems:"center",
  position:"absolute",
  left:"0px",
  bottom:"0px",
  width:"100%",
  gap:"15px",
  
}));

const Chatmessages = styled(Box)({
  display:"block",
  height:"calc(100% - 148px)",
  background:"#ddddf7",
  padding:"15px 12px 20px 12px",
  overflowY:"scroll",
  '&::-webkit-scrollbar': {
    width: '0.4em'
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
  }
});

const Chatforme = styled(Box)({
  width:"100%",
  display:"flex",
  justifyContent:"flex-end",
  alignItems:"flex-start",
  flexDirection:"row-reverse",
  padding:"7px 0",
});

const Textforme = styled(Box)({
  width:"100%",
  textAlign:"right",
  paddingRight:"24px",
});

const Chatforother = styled(Box)({
  width:"100%",
  display:"flex",
  justifyContent:"flex-end",
  alignItems:"flex-start",
  flexDirection:"row",
  padding:"7px 0",
});

const Textforother = styled(Box)({
  width:"100%",
  textAlign:"left",
  paddingLeft:"20px",
});

function Chatbar() {
  return (
    <Box flex={2} position="relative" padding={0} sx={{background:"#ddddf7", marginLeft:"0px !Important", borderRadius:{xs:"12px", sm:"0 12px 12px 0"}, minHeight:"400px", overflow:"hidden" }}>
        <Chatheader />

        <Chatmessages>
            {/* my message */}
            <Chatforme sx={{paddingTop:"0px !important",}}>
                <Stack sx={{width:"72px"}}>
                  <Avatar sx={{width:"30", height:"30"}} src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
                  <Typography variant='span' sx={{fontSize:{xs:"12px !important", sm:"16px !important"}, color:"#898989", marginTop:"6px"}}>just now</Typography>
                </Stack>
                <Textforme>
                  <Typography variant='p' sx={{fontSize:"16px", padding:"10px 16px", background:"#839fff", display:"inline-block", borderRadius:"8px 8px 0 8px", color:"#fff", maxWidth:"450px"}}> this is my dog </Typography>
                  <ImageList
                    sx={{ width: 200, height: 140, marginLeft:"auto", marginTop:"10px", padding:"5px", background:"#839fff",  borderRadius:"8px 0 8px 8px !important" }}
                    cols={1}
                  >
                    <ImageListItem>
                      <img src="https://images.unsplash.com/photo-1509559320938-387dfd4e966b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="user" 
                        />
                    </ImageListItem>
                  </ImageList>
                </Textforme>
            </Chatforme>
            {/* Other message */}
            <Chatforother>
                <Stack sx={{width:"72px"}}>
                  <Avatar sx={{width:"30", height:"30"}} src="https://mui.com/static/images/avatar/3.jpg"  />
                  <Typography variant='span' sx={{fontSize:{xs:"12px !important", sm:"16px !important"}, color:"#898989", marginTop:"6px"}}>just now</Typography>
                </Stack>
                <Textforother>
                  <Typography variant='p' sx={{fontSize:"16px", padding:"10px 16px", background:"#fff", display:"inline-block", borderRadius:"8px 8px 8px 0", color:"##2f2d52", maxWidth:"450px"}}> soo cutee 😊 </Typography>
                </Textforother>
            </Chatforother>
            {/* my message */}
            <Chatforme>
                <Stack sx={{width:"72px"}}>
                  <Avatar sx={{width:"30", height:"30"}} src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"  />
                  <Typography variant='span' sx={{fontSize:{xs:"12px !important", sm:"16px !important"}, color:"#898989", marginTop:"6px"}}>just now</Typography>
                </Stack>
                <Textforme>
                  <Typography variant='p' sx={{fontSize:"16px", padding:"10px 16px", background:"#839fff", display:"inline-block", borderRadius:"8px 8px 0 8px", color:"#fff", maxWidth:"450px"}}> yeah 😂</Typography>
                </Textforme>
            </Chatforme>
        </Chatmessages>
        <Search > 
            <InputBase placeholder="Type somethings..." sx={{width:"100%", color:"#ababab", fontWeight:"400", fontSize:"18px",}} /> 
            <AttachFileIcon sx={{fill:"#ababab", cursor:"pointer",}} />
            <EmojiEmotionsIcon sx={{fill:"#ababab", cursor:"pointer",}} />
            <Button variant="contained" endIcon={<SendIcon />} sx={{background:"#839fff", padding:"7px 18px", borderRadius:"4px", boxShadow:"none", ":hover":{background:"#5d5b8d"} }} >
              Send
            </Button>
        </Search>
    </Box>
  )
}

export default Chatbar;