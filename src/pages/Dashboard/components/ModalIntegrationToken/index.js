import React from "react";
import PropTypes from "prop-types";
import { Dialog, withStyles } from "@material-ui/core";

import ModalIntegrationToken from "./ModalIntegrationToken";

PropTypes.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  classes: PropTypes.object,
};

const IntegrationToken = ({ open, onClose, classes }) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      maxWidth="sm"
      fullWidth
      open={open}
    >
      <ModalIntegrationToken onClose={onClose} />
    </Dialog>
  );
};

export default withStyles(() => ({
  paper: { borderRadius: 15 },
}))(IntegrationToken);
