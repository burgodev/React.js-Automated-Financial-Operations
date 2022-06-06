import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { withStyles } from "@material-ui/core";

import Flex from "../Flex";

const styles = {
  root: {
    // width: "100%",
    // padding: "1rem",
    // borderRadius: "1rem",
    background: "#FFF",
  },
};

const Card = ({
  clean = false,
  children,
  className,
  style,
  classes,
  width,
  height,
  background,
  title,
  content,
  borderRadius,

  ...rest
}) => (
  <div
    className={cn(clean ? null : classes.root, className)}
    style={{ width, height, background, borderRadius, ...style }}
    {...rest}
  >
    {title && content ? (
      <>
        <Flex>{title}</Flex>
        <Flex>{content}</Flex>
      </>
    ) : (
      children
    )}
  </div>
);

PropTypes.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  clean: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  borderRadius: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)],
};

Card.defaultProps = {};

export default withStyles(styles)(Card);
