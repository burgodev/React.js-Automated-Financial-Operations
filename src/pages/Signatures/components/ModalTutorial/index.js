import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalTutorial from "./ModalTutorial";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  operations: PropTypes.func,
};

const Tutorial = ({ open, operations, onClose, classes }) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      maxWidth="sm"
      fullWidth
      open={open}
      // onClose={onClose}
    >
      <ModalTutorial onClose={onClose} operations={operations} />
    </Dialog>
  );
};

export default withStyles(() => ({
  paper: { borderRadius: 60, maxWidth: 580 },
}))(Tutorial);
