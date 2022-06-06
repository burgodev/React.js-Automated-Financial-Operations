import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalOperations from "./ModalOperations";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  operations: PropTypes.func,
};

const Operations = ({ open, operations, onClose, classes }) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      maxWidth="lg"
      fullWidth
      open={open}
      onClose={onClose}
    >
      <ModalOperations onClose={onClose} operations={operations} />
    </Dialog>
  );
};

export default withStyles(() => ({
  paper: { borderRadius: 15 },
}))(Operations);
