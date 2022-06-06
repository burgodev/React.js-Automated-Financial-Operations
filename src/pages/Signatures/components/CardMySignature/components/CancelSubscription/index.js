import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalCancelSimulation from "./ModalCancelSimulation";
import ModalCancelSignature from "./ModalCancelSubscription";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
  subscriptionType: PropTypes.string,
  subscriptionId: PropTypes.string,
};

const CancelSubscription = ({
  open,
  onClose,
  classes,
  subscriptionType,
  subscriptionId,
}) => {
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
      {subscriptionType === "SIMULATION" ? (
        <ModalCancelSimulation
          subscriptionId={subscriptionId}
          onClose={onClose}
        />
      ) : subscriptionType === "SIGNATURE" ? (
        <ModalCancelSignature subscriptionId={subscriptionId} />
      ) : (
        ""
      )}
    </Dialog>
  );
};

export default withStyles(() => ({
  paper: { borderRadius: 25, maxWidth: 580 },
}))(CancelSubscription);
