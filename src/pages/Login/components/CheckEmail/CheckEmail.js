import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";

import { Flex, Button, Typography } from "../../../../_common/components";
import { COMPONENTS } from "../../Login";

PropTypes.propTypes = {
  classes: PropTypes.object,
  changeDisplay: PropTypes.func,
};

const CheckEmail = ({ classes, changeDisplay }) => {
  return (
    <Flex center flexDirection="column" height="85%">
      <EmailIcon className={classes.icon} />
      <Typography className={classes.typography}>
        Verifique seu email
      </Typography>
      <Typography element="p">
        We have sent a password recover instructions to your email.
      </Typography>

      <Flex className={classes.flex}>
        <Button onClick={() => changeDisplay(COMPONENTS.LOGIN)} width="100%">
          Entendi
        </Button>
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  typography: {
    color: theme.palette.blue,
    fontSize: 32,
    fontWeight: "700",
  },
  icon: {
    fontSize: 80,
    color: "#036998",
    marginBottom: 40,
  },
  flex: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    width: "100%",
  },
}))(CheckEmail);
