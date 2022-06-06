import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  Flex,
  Typography,
  Container,
  Divider,
  Button,
} from "../../../_common/components";

// import CardAvailableSignature from "./components/CardAvailableSignature";
import CardMySignature from "../components/CardMySignature";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const MySignatures = ({ classes }) => {
  const [hasSignature /*, setHasSignature*/] = useState(true);
  const i18n = useTranslation().t;

  return (
    <Container className={classes.container}>
      <Flex center flexDirection="column" width="100%">
        <Typography className={classes.pageTitle}>
          {i18n("CardMySignature.title")}
        </Typography>
        <Divider margin="16px 0 0" />
      </Flex>

      {hasSignature && <CardMySignature />}

      <Flex center style={{ marginTop: 8 }}>
        <Link className={classes.link} to={"/assinaturas/novas-assinaturas"}>
          <Button className={classes.button}>
            {i18n("CardMySignature.bt_new_subscription")}
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default withStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    opacity: 0,
    paddingBottom: "5vh",
    paddingLeft: 0,
    paddingRight: "4vw",
    // paddingTop: "1.5vh",
    animation: `$translate .5s ease-out forwards`,
  },
  "@keyframes translate": {
    to: {
      opacity: 1,
      paddingLeft: "4vw",
    },
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 28,
  },
  button: {
    background: theme.palette.gradient.default,
    width: 440,
    borderRadius: 15,
    "&:hover": {
      background: theme.palette.default,
    },
  },
  link: {
    textDecoration: "none",
  },
  // subtitle1: {
  //   fontWeight: "bold",
  //   fontSize: 24,
  //   marginTop: 55,
  //   marginBottom: 7,
  // },
  // subtitle2: {
  //   fontWeight: "bold",
  //   fontSize: 20,
  //   color: "#CBCBCB",
  // },
  // cardBottom: {
  //   borderRadius: "30px 0px",
  //   padding: "20px 15px 15px 20px",
  //   marginTop: 4,
  // },
  // cardTop: {
  //   borderRadius: "30px 0px",
  //   padding: "20px 15px 15px 20px",
  // },
  // typography1: {
  //   width: 394,
  //   marginTop: 0,
  //   marginLeft: 15,
  //   fontSize: 16,
  // },
  // typography2: {
  //   fontWeight: "bold",
  //   fontSize: 12,
  //   width: 394,
  //   marginTop: 0,
  //   marginLeft: 15,
  // },
  // flexMargin: {
  //   marginBottom: 8,
  // },
}))(MySignatures);
