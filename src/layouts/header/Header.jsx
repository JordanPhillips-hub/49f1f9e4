import { Stack, Button, Box } from "@mui/material";
import Logo from "../../components/logo/Logo";

export default function Header() {
  return (
    <Stack
      component="header"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2 }}
    >
      <Logo />

      <Box>
        {["Archived Calls", "All Calls"].map((index) => (
          <Button key={index} variant="text">
            {index}
          </Button>
        ))}
      </Box>
    </Stack>
  );
}
