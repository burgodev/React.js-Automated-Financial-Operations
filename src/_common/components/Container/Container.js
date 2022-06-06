import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    height: "100%",
    width: "100%",
  },
};

PropTypes.propTypes = {
  classes: PropTypes.object,
  clean: PropTypes.bool,
  className: PropTypes.string,
};

const Container = ({ className, clean = false, classes, ...props }) => {
  return (
    <div className={cn(clean ? null : classes.root, className)} {...props} />
  );
};

export default withStyles(styles)(Container);
