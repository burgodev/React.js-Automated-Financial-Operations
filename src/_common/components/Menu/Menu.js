import React from "react";
import { Link, useLocation } from "react-router-dom";
import { withStyles, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

import logo from "../../../assets/botmoney.png";
import { Flex, Typography, Logout } from "../../components";
import {
  DashboardIcon,
  SignaturesIcon,
  // TransactionsIcon,
  // ManagerIcon,
} from "../../components/Icons";
import image from "../../../assets/menu.png";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Menu = ({ classes }) => {
  let location = useLocation();

  const MENU_ITEMS = createItems(location, classes);
  const i18n = useTranslation().t;

  return (
    <div className={classes.sidebar}>
      <Flex className={classes.flex}>
        <img src={logo} alt="Logo Botmoney" width="100" height="100" />

        <div className={classes.container}>
          {MENU_ITEMS.map(({ icon, path, text }) => (
            <Flex center width="100%" key={path}>
              <Link className={classes.link} to={path} key={path}>
                <IconButton color="primary">
                  <Typography className={classes.text}>
                    {icon}
                    {i18n(`Menu.${text}`)}
                  </Typography>
                </IconButton>
              </Link>
            </Flex>
          ))}
        </div>
        <Logout />
      </Flex>
    </div>
  );
};

// TODO - seria mais legal nao passar os styles dessa forma e sim por classe...
const createItems = (location, classes) => [
  {
    icon: (
      <DashboardIcon
        backgroundColor={
          location.pathname === "/home" || location.pathname === "/perfil"
            ? "#FFF"
            : "#05C7F2"
        }
        color={
          location.pathname === "/home" || location.pathname === "/perfil"
            ? "#05C7F2"
            : "#FFF"
        }
        style={{ marginTop: 8 }}
      />
    ),
    path: "/home",
    text: "dashboard",
  },
  {
    icon: (
      <SignaturesIcon
        backgroundColor={
          location.pathname.includes("/assinaturas") ? "#FFF" : "#05C7F2"
        }
        color={location.pathname.includes("/assinaturas") ? "#05C7F2" : "#FFF"}
        style={{ marginTop: 8 }}
      />
    ),
    path: "/assinaturas",
    text: "subscriptions",
  },

  // {
  //   icon: (
  //     <TransactionsIcon
  //       backgroundColor={
  //         location.pathname === "/operations" ? "#FFF" : "#05C7F2"
  //       }
  //       color={location.pathname === "/operations" ? "#05C7F2" : "#FFF"}
  //       style={{ marginTop: 8 }}
  //     />
  //   ),
  //   path: "/operations",
  //   text: "",
  // },
  // {
  //   icon: (
  //     <ManagerIcon
  //       backgroundColor={location.pathname === "/manager" ? "#FFF" : "#05C7F2"}
  //       color={location.pathname === "/manager" ? "#05C7F2" : "#FFF"}
  //       style={{ marginTop: 8 }}
  //     />
  //   ),
  //   path: "/manager",
  //   text: "",
  // },
];

export default withStyles((theme) => ({
  sidebar: {
    height: "100vh",
    // opacity: .9,
    width: "10vw",
    // background: "linear-gradient(45deg, #17819f 30%, #032557 90%)",
    background: `url(${image})`,
    backgroundSize: "cover",

    // background: "linear-gradient(341.93deg, #14387B 0%, #140E38 97.83%)",
    backgroundPosition: "right",
    // backgroundImage: `linear-gradient(341.93deg, #14387B 0%, #140E38 97.83%), url(${image})`,
    // backgroundImage: `linear-gradient(151.49deg, #994dffb8 -0.14%, #05bcf2d1 128.01%), url(${image})`,
    // backgroundColor: "rgb(0 0 0 / 95%)",
    position: "fixed",
    zIndex: 1,
  },
  container: {
    textAlign: "center",
    height: "50vh",
  },
  flex: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    padding: "5vh 0",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.white,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
}))(Menu);
