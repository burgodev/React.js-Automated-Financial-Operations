import React, { useState } from "react";
import { withStyles, Avatar } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import { Flex, Container, Typography, Card, TextField } from "../";
import { AlarmIcon } from "../Icons";
import CurrencyOperations from "./components/CurrencyOperations";
import CurrentOperations from "./components/CurrentOperations";
import avatar from "../../../assets/user.jpg";
import { useSelector } from "react-redux";
// import image from "../../../assets/bg1.jpg";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Sidebar = ({ classes }) => {
  const user = useSelector((state) => state.user.data);
  const [robot, setRobot] = useState();
  const [percentage, setPercentage] = useState();
  const [value, setValue] = useState();
  const [total, setTotal] = useState("$ 5.000.00");
  let location = useLocation();

  if (location.pathname.includes("/assinaturas")) return null;

  return (
    <Container clean className={classes.container}>
      <Flex justifyContent="space-between" alignItems="center" width="90%">
        <Link to="/perfil" className={classes.link}>
          <Flex alignItems="center">
            <Avatar
              alt="Profile image"
              src={avatar}
              className={classes.avatar}
            />
            <Typography color="primary" className={classes.text}>
              Hello, <br />
              {user ? user.name?.split(" ")[0] : ""}
            </Typography>
          </Flex>
        </Link>
        <AlarmIcon />
      </Flex>

      {(location.pathname === "/" || location.pathname === "/perfil") && (
        <>
          <CurrencyOperations />
          <CurrentOperations />
        </>
      )}

      {location.pathname === "/operations" && (
        <>
          <Flex style={{ marginTop: 75, width: 150 }}>
            <Typography fontSize={24} fontWeight="bold">
              Quanto cada automação gera lucro?
            </Typography>
          </Flex>
          <Flex style={{ marginTop: 25, width: 150 }}>
            <Card style={{ padding: "16px 18px", background: "transparent" }}>
              <Typography italic fontSize={20} fontWeight="600">
                Simulação de contratação
              </Typography>
              <TextField
                select
                variant="standard"
                className={classes.margin}
                style={{ marginTop: 16 }}
                id="textfield-robot-sidebar"
                value={robot}
                onChange={(e) => setRobot(e.target.value)}
              />
              <TextField
                className={classes.margin}
                variant="standard"
                placeholder="% de Lucro Aproximada"
                id="textfield-percentage-sidebar"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
              />
              <TextField
                className={classes.margin}
                variant="standard"
                id="textfield-value-sidebar"
                value={value}
                placeholder="Capital Aplicado"
                onChange={(e) => setValue(e.target.value)}
              />
              <Typography
                italic
                fontSize={20}
                fontWeight="600"
                className={classes.margin}
              >
                =
              </Typography>
              <TextField
                className={classes.margin}
                variant="standard"
                id="textfield-total-sidebar"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </Card>
          </Flex>
        </>
      )}
    </Container>
  );
};

export default withStyles((theme) => ({
  text: {
    color: theme.palette.text.primary,
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "16px",
  },
  container: {
    opacity: 0.8,
    height: "100vh",
    position: "fixed",
    right: "0",
    width: "13vw",
    padding: "48px 23px",
    // backgroundImage: `linear-gradient(to right bottom, rgb(255 255 255 / 95%), rgb(255 255 255 / 99%)),url(${image})`,
    backgroundSize: "contain",
    // backgroundColor: theme.palette.white,
  },
  avatar: {
    width: 41,
    height: 41,
    backgroundColor: theme.palette.lightBlue,
    borderRadius: 17,
    marginRight: 7,
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
  },

  margin: {
    marginBottom: 16,
  },
}))(Sidebar);
