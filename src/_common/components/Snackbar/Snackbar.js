import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Snackbar as MuiSnackbar, withStyles } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

PropTypes.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    descricao: PropTypes.string.isRequired,
    checked: PropTypes.bool,
  }).isRequired,
};

const Snackbar = ({ data = initialValues, classes, ...props }) => {
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  useEffect(() => {
    if (data.open) setOpenErrorSnackbar(true);
  }, [data]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenErrorSnackbar(false);
  };
  return (
    <MuiSnackbar
      open={openErrorSnackbar}
      autoHideDuration={2500}
      onClose={handleClose}
      {...props}
      className={classes.snackbar}
    >
      <Alert onClose={handleClose} severity={data.severity}>
        {data.message}
      </Alert>
    </MuiSnackbar>
  );
};

const initialValues = {
  message: "Alterações salvas com sucesso",
  severity: "success",
  open: false,
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default withStyles((theme) => ({
  snackbar: {
    position: "fixed",
    bottom: "2vh",
    width: "100%",
  },
}))(Snackbar);
