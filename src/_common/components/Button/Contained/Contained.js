import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { theme as mainTheme } from "../../../utils/theme.js";
import { Loading } from "../../";

const theme = createTheme({
  overrides: {
    MuiButton: {
      text: {
        width: 223,
        // height: 52,
        textTransform: "none",
        // background: "#05C7F2",
        background: mainTheme.palette.gradient.default,
        // background: "linear-gradient(91deg, #032557 -2.83%, #05C7F2 106.58%)",
        boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: 8,
        color: "white",
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: "1rem",
        transition: ".5s",

        "&:hover": {
          // color: "white",
          // background: "white",
          // background: "#05C7F2",

          // border: "solid 1px #05C7F2",
          // background: "white",
          transform: "scale(1.05)",
        },
        "&:disabled": {
          color: "white",
          background: "grey",
          // background: "#1010104D",
          cursor: "not-allowed",
          // border: "solid 1px #05C7F2",
        },
      },
      root: {},
    },
  },
});

PropTypes.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const Contained = ({
  children,
  background,
  color,
  width,
  height,
  borderRadius,
  fontSize,
  style,
  loading,
  disabled,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton
        style={{
          background,
          color,
          width,
          height,
          borderRadius,
          fontSize,
          ...style,
        }}
        {...props}
        disabled={disabled || loading}
      >
        {loading ? <Loading isLoading size={24} color="white" /> : children}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Contained;
