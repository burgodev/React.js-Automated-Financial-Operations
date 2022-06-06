import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import { Container, Flex, Typography, Divider } from "../../_common/components";
import MyProfile from "./components/MyProfile";
import MyData from "./components/MyData";
import { TokenIcon } from "../../_common/components/Icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Profile = ({ classes }) => {
  return (
    <Container className={classes.container}>
      <MyProfile />
      <Divider margin="32px 0" />
      <MyData />

      <Flex alignItems="center" className={classes.flexToken}>
        <TokenIcon width="40" height="40" />
        <Typography className={classes.tokenTypo}>
          Token de integração da sua corretora
        </Typography>
      </Flex>
    </Container>
  );
};

export default withStyles((theme) => ({
  container: {
    paddingLeft: 40,
  },
  tokenTypo: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 8,
  },
  flexToken: {
    marginTop: 32,
  },
}))(Profile);
