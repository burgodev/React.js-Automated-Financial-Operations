import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../store/user";
import { useLocation } from "react-router-dom";

import Menu from "../Menu";
import backgroundImage from "../../../assets/backgroundImg.png";
import Header from "../Header";
import Container from "../Container";

PropTypes.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
};

const AppWrapper = ({ classes, children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  console.log(location);
  return (
    <Container className={classes.container}>
      {location.pathname !== "/" && (
        <>
          {/* <Header /> */}
          <Menu />
        </>
      )}

      <div
        className={location.pathname === "/" ? classes.login : classes.content}
      >
        {children}
      </div>
    </Container>
  );
};

export default withStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `linear-gradient(to right bottom, rgb(255 255 255 / 50%), rgb(255 255 255 / 50%)),url(${backgroundImage})`,
    backgroundSize: "cover",
  },
  login: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    height: "90vh",
    left: "10vw",
    overflowY: "auto",
    position: "fixed",
    bottom: 0,
    right: 0,
  },
  contentLogin: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100%",
    left: 0,
    position: "fixed",
  },
}))(AppWrapper);
