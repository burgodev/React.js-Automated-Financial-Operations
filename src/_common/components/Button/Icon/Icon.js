import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import PropTypes from "prop-types";

const theme = createTheme({
  overrides: {
    MuiButton: {
      text: {
        transition: ".5s",
        "&:hover": {
          transform: "scale(1.25)",
        },
      },
    },
  },
});

PropTypes.propTypes = {
  children: PropTypes.object,
};

const Icon = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton {...props}>{children}</MuiButton>
    </ThemeProvider>
  );
};

export default Icon;
