import { Stack, Button, ButtonGroup } from "@mui/material";
import Logo from "../../components/logo/Logo";
import { useNavigationContext } from "../../hooks/api.hooks";

export default function Header() {
  const { currentView, handleCurrentView } = useNavigationContext();
  const viewOptions = ["Archived Calls", "All Calls"];

  return (
    <Stack
      component="header"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2 }}
    >
      <Logo />

      <ButtonGroup size="small" color="primary">
        {viewOptions.map((label) => (
          <Button
            key={label}
            variant={currentView === label ? "contained" : "outlined"}
            onClick={() => handleCurrentView(label)}
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
    </Stack>
  );
}
