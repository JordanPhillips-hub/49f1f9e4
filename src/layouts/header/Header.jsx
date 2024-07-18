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
        <Button>Archived Calls</Button>
        <Button>All Calls</Button>
      </Box>
    </Stack>
  );
}
