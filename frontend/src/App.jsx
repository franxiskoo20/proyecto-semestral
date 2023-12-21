import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Producto, Egreso, Ingreso, Traspaso } from "./pages";
import theme from "./theme/theme";
import { DrawerProvider } from "./contexts/DrawerProvider";
import { SnackbarProvider } from "./contexts/SnackbarProvider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerProvider>
        <SnackbarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Producto />} />
              <Route path="/ingreso" element={<Ingreso />} />
              <Route path="/egreso" element={<Egreso />} />
              <Route path="/traspaso" element={<Traspaso />} />
            </Routes>
          </Router>
        </SnackbarProvider>
      </DrawerProvider>
    </ThemeProvider>
  );
};

export default App;
