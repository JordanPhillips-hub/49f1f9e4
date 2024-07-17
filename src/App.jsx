import { Box, Container, Divider } from "@mui/material";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <Box component="div" id="app">
      <Container
        sx={{
          backgroundColor: "common.white",
          width: "376px",
          height: "666px",
          borderRadius: "3px",
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, .9)",
        }}
      >
        <Header />

        <Divider />

        <Box component="div" sx={{ p: 2 }}>
          Some activities should be here
        </Box>
      </Container>
    </Box>
  );
}

export default App;
