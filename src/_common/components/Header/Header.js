import React, { useEffect, useState } from "react";
import { Avatar, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

import { Link } from "react-router-dom";
import {
  Flex,
  Typography,
  Container,
  Divider,
  SelectLanguage,
  Notifications,
} from "../";

const Header = ({ classes }) => {
  const [profileImageRoute, setProfileImageRoute] = useState("");
  const email = localStorage.getItem("email");

  return (
    <Container className={classes.container}>
      <Link to="/client/profile" className={classes.link}>
        <Avatar
          variant="rounded"
          src={profileImageRoute}
          className={classes.avatar}
        />
        <Flex className={classes.flex}>
          <Typography className={classes.email}>{email}</Typography>
        </Flex>
      </Link>
      <Flex justifyContent="flex-end" alignItems="center">
        {/* <Notifications /> */}
        <SelectLanguage />
      </Flex>
    </Container>
  );
};

export default withStyles((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    position: "fixed",
    right: 0,
    top: 0,
    borderRadius: "10px",
    background: "white",
    padding: "15px 25px",
    marginBottom: "2vh",
    // borderBottom: `1px solid ${theme.colors.lightGray}`,
    height: "10vh !important",
    width: "90vw !important",
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    background: theme.palette.main,
    boxShadow: "inset 4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "50%",
    marginRight: "15px",
  },
  name: {
    fontWeight: 600,
    fontSize: "1.2rem",
    color: theme.palette.primary,
    textAlign: "left",
    width: "100%",
  },
  email: {
    // marginTop: 4,
    fontSize: "0.90rem",
    fontWeight: 500,
    color: theme.palette.primary,
    textAlign: "left",
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  flex: {
    flexDirection: "column",
    width: "22%",
    position: "relative",
    marginRight: "120px",
  },
}))(Header);

Header.propTypes = {
  classes: PropTypes.object,
};
