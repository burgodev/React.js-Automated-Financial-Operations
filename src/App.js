import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "./_common/utils/theme";
import Routes from "./routes";
import SnackbarProvider from "react-simple-snackbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <Routes />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
