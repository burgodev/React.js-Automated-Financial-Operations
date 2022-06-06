import React from "react";
import PropTypes from "prop-types";
// import Standard from "./Standard";
import Outlined from "./Outlined";
// import Filled from "./Filled";
// import Formik from "./Formik";
// import { TextField as MuiTextfield } from "@material-ui/core";

PropTypes.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.object,
  children: PropTypes.object,
  variant: PropTypes.oneOf(["standard", "outlined", "filled, formik"]),
};

const TextField = ({
  variant = "outlined",
  className,
  children,
  classes,
  ...props
}) => {
  return (
    <>
      {/* <MuiTextfield {...props} variant={variant}>
        {children}
      </MuiTextfield> */}
      {/* {variant === "standard" && <Standard {...props} />} */}
      {variant === "outlined" && (
        <Outlined children={children} className={className} {...props} />
      )}
      {/* {variant === "filled" && <Filled {...props} />}
      {variant === "formik" && <Formik {...props} />} */}
    </>
  );
};

export default TextField;
