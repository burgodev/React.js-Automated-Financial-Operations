import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField } from "formik-mui";
import PropTypes from "prop-types";

PropTypes.propTypes = { children: PropTypes.object };

const Formik = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField>{children}</TextField>
    </ThemeProvider>
  );
};

const theme = createTheme({});

export default Formik;
