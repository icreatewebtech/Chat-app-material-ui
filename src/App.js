import './App.css';
import {Box, Stack} from "@mui/material";
import Sidebar from "./Components/Sidebar";
import Chatbar from "./Components/Chatbar";

function App() {
  return (
    <>
     <Box padding={3} sx={{background:"#a7bcff", height:"100vh",}}> 
        <Box maxWidth="lg" margin="auto">
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <Chatbar />
          </Stack>
        </Box>
     </Box>
    </>
  );
}

export default App;
