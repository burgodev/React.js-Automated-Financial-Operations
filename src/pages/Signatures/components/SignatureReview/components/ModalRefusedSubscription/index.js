import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalRefusedSubscription from "./ModalRefusedSubscription";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const RefusedSubscription = ({ open, onClose, classes, nextStep }) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}
    >
      <ModalRefusedSubscription nextStep={nextStep} />
    </Dialog>
  );
};

export default withStyles(() => ({
  paper: { borderRadius: 60, maxWidth: 580 },
}))(RefusedSubscription);
