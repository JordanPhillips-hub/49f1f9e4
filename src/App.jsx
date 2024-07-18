import { Box, Container, Divider } from "@mui/material";
import Header from "./layouts/header/Header";
import Main from "./layouts/main/main";
import "./App.css";

function App() {
  return (
    <Box component="div" id="app">
      <Container
        sx={{
          backgroundColor: "common.white",
          width: "450px",
          height: "666px",
          borderRadius: "3px",
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, .9)",
        }}
      >
        <Header />
        <Divider />
        <Main />
      </Container>
    </Box>
  );
}

export default App;
