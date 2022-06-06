import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { fetchUser } from "../../store/user";
import api from "../../services/api";
import { Flex, Typography, Divider, Container } from "../../_common/components";
import {
  Balance,
  MonthlyAnalysis,
  Signatures,
  ModalIntegrationToken,
} from "./components";
import { TokenIcon } from "../../_common/components/Icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Dashboard = ({ classes }) => {
  const [openIntegrationToken, setOpenIntegrationToken] = useState(false);
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
      const resp = await api.get("/dashboard");
      setTimeout(() => setData(resp.data), 1000);
    } catch (e) {}
  };

  return (
    <>
      <Divider className={classes.divider} />
      <Container className={classes.container}>
        <Flex alignItems="center">
          <Typography className={classes.pageTitle}>Operações</Typography>
          <TokenIcon className={classes.icon} width="40" height="40" />
          <Typography className={classes.subtitle}>
            Token de integração da sua corretora
          </Typography>
        </Flex>

        <Balance values={data?.balance} />
        <MonthlyAnalysis subscriber={data?.subscriber} />
        <Signatures values={data?.signatures} />

        <ModalIntegrationToken
          open={openIntegrationToken}
          onClose={() => setOpenIntegrationToken(false)}
        />
      </Container>
    </>
  );
};

export default withStyles((theme) => ({
  divider: {
    transform: "translateY(150px)",
  },
  icon: {
    margin: "0 8px 0 16px",
  },

  container: {
    opacity: 0,
    paddingLeft: 0,
    paddingRight: "7.5vw",
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
    fontSize: 32,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 28,
  },
}))(Dashboard);
