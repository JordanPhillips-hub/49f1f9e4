import { Stack, Button, Box } from "@mui/material";
import Logo from "../logo/Logo";

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
        <Button>Inbox</Button>
        <Button>All Calls</Button>
      </Box>
    </Stack>
  );
}
