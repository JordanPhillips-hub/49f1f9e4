import { Stack, Button, Box } from "@mui/material";
import Logo from "../../components/logo/Logo";
import { useNavigationContext } from "../../hooks/api.hooks";

export default function Header() {
  const { currentView, handleCurrentView } = useNavigationContext();

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
        {["Archived Calls", "All Calls"].map((label) => (
          <Button
            key={label}
            size="small"
            color={currentView === label ? "secondary" : "primary"}
            variant={currentView === label ? "outlined" : "text"}
            onClick={() => handleCurrentView(label)}
            sx={{ mr: 1 }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Stack>
  );
}
