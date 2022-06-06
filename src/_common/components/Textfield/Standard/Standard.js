import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { TextField as MuiTextfield } from "@material-ui/core";
import PropTypes from "prop-types";

PropTypes.propTypes = {
  children: PropTypes.object,
  className: PropTypes.className,
  style: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
};

const Standard = ({
  children,
  background,
  color = "#B2D4E4",
  width,
  height,
  borderRadius,
  fontSize,
  style,
  className,
  ...props
}) => {
  const theme = createTheme({
    overrides: {
      MuiOutlinedInput: {
        notchedOutline: {
          border: "none",
        },
      },

      MuiInputBase: {
        root: {
          background: "#FFFFFF",
          border: `1px solid ${color}`,
          borderRadius: 5,
          width: 174,
          height: 30,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MuiTextfield
        variant="outlined"
        style={{
          background,
          color,
          width,
          height,
          borderRadius,
          fontSize,
          ...style,
        }}
        className={className}
        {...props}
      >
        {children}
      </MuiTextfield>
    </ThemeProvider>
  );
};

export default Standard;
