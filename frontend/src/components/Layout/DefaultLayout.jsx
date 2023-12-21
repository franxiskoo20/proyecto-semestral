import { useDrawer } from "../../hooks/useDrawer";
import DrawerBar from "../Navigation/DrawerBar";
import { Box, Container } from "@mui/material";

const DefaultLayout = ({ children }) => {
  const { drawerOpen, toggleDrawer } = useDrawer();
  return (
    <Box component="section" sx={{ display: "flex" }}>
      <DrawerBar toggleDrawer={toggleDrawer} open={drawerOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          my: 10,
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ boxSizing: "border-box" }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
