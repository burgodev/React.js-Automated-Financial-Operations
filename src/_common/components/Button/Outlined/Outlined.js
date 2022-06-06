import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { theme as mainTheme } from "../../../utils/theme.js";

const theme = createTheme({
  overrides: {
    MuiButton: {
      text: {
        // width: 214,
        // height: 51,
        border: `1px solid ${mainTheme.palette.primary.main}`,        
        textTransform: "none",
        background: "transparent",
        // boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 8,
        color: mainTheme.palette.primary.main,
        fontFamily: "Nunito",
        fontWeight: 600,
        fontSize: "1rem",
        transition: ".5s",
        "&:hover": {
          backgroundColor: "white",
          transform: "scale(1.05)",
          // color: "#398CBF",
        },
      },
    },
  },
});

PropTypes.propTypes = {
  children: PropTypes.object,
};

const Contained = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton {...props}>{children}</MuiButton>
    </ThemeProvider>
  );
};

export default Contained;
