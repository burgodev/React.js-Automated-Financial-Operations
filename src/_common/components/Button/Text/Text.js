import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { theme as mainTheme } from "../../../utils/theme.js";

const theme = createTheme({
  overrides: {
    MuiButton: {
      text: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        textTransform: "none",
        fontSize: "1rem",
        transition: ".5s",
        // letterSpacing: "0em",
        // textAlign: "left",
        // color: " #05C7F2",
        color: mainTheme.palette.primary.main,
        // padding: "6px 16px",
        "&:hover": {
          background: "transparent",
          transform: "scale(1.05)",
        },
      },
    },
  },
});

PropTypes.propTypes = {
  children: PropTypes.object,
};

const Text = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton {...props}>{children}</MuiButton>
    </ThemeProvider>
  );
};

export default Text;
