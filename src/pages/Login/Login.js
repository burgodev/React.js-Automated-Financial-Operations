import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import { Container, Card, Flex } from "../../_common/components";
import LoginImg from "../../assets/LoginImg2.png";
import LoginForm from "./components/LoginForm";
import PasswordReset from "./components/PasswordReset";
import RegisterForm from "./components/RegisterForm";
import CheckEmail from "./components/CheckEmail";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

export const COMPONENTS = {
  LOGIN: 0,
  REGISTER: 1,
  PASSWORD_RESET: 2,
  CHECK_EMAIL: 3,
  CHANGE_PASSWORD: 4,
};

const Login = ({ classes }) => {
  const [display, setDisplay] = useState(COMPONENTS.LOGIN);

  const changeDisplay = (component) => {
    setDisplay(component);
  };

  const render = () => {
    switch (display) {
      case COMPONENTS.LOGIN: {
        return <LoginForm changeDisplay={changeDisplay} />;
      }
      case COMPONENTS.REGISTER: {
        return <RegisterForm changeDisplay={changeDisplay} />;
      }
      case COMPONENTS.PASSWORD_RESET: {
        return <PasswordReset changeDisplay={changeDisplay} />;
      }
      case COMPONENTS.CHECK_EMAIL: {
        return <CheckEmail changeDisplay={changeDisplay} />;
      }

      default:
        return <LoginForm changeDisplay={changeDisplay} />;
    }
  };

  return (
    <>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <Flex>
            <img alt="login background" src={LoginImg} height={560} />
            <Card className={classes.formCard}>{render()}</Card>
          </Flex>
        </Card>
      </Container>
    </>
  );
};

export default withStyles((theme) => ({
  container: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    paddingLeft: "0",
    paddingRight: "4vw",
    animation: theme.animations.translatePageContainer.animation,
  },
  card: {
    borderRadius: 16,
  },
  formCard: {
    width: 450,
    zIndex: 1,
    borderRadius: 20,
    padding: "28px 40px",
    height: 540,
  },
  [theme.animations.translatePageContainer.keyframeName]:
    theme.animations.translatePageContainer.keyframeValue,
}))(Login);
