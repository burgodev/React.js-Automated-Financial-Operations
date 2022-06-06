import React from "react";
import { withStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

const Logout = ({ classes }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Button variant="icon" onClick={logout} className={classes.button}>
      <ExitToAppIcon fontSize="large" color="inherit" />
    </Button>
  );
};

export default withStyles((theme) => ({
  button: {
    color: theme.palette.white,
    opacity: 0.8,
  },
}))(Logout);
