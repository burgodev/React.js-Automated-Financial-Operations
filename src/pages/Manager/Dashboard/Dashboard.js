import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  Flex,
  Typography,
  TextField,
  Container,
  Card,
  Loading,
} from "../../../_common/components";
import api from "../../../services/api";
import {
  ApagarDpsIcon2,
  PersonIcon,
  SupportIcon,
} from "../../../_common/components/Icons";
import { theme } from "../../../_common/utils/theme";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Dashboard = ({ classes }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await api.get("/manager");
      setTimeout(() => setData(resp.data), 1000);
    } catch (e) {}
  };

  return (
    <Container className={classes.container}>
      <Flex alignItems="center">
        <Typography className={classes.pageTitle}>Dashboard</Typography>
      </Flex>

      <Grid container style={{ marginTop: 24 }}>
        <Grid item xs={7}>
          <Typography fontSize={22}>Resumo Mensal - Contratos</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography fontSize={22}>Comissões</Typography>
        </Grid>

        <Grid item xs={2} />

        <Grid item xs={2}>
          <Card className={classes.card} width="8vw">
            <Flex className={classes.flex}>
              <Typography fontSize={16}>Total de clientes</Typography>
              {/* <Typography className={classes.totalClients}>20</Typography> */}

              {!data ? (
                <Loading
                  size={30}
                  isLoading
                  style={{
                    marginTop: 8,
                    marginLeft: 8,
                    justifyContent: "flex-start",
                  }}
                />
              ) : (
                <Typography className={classes.totalClients}>
                  {data.totalClients}
                </Typography>
              )}
            </Flex>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.card} width="10vw">
            <Flex className={classes.flex}>
              <Typography fontSize={16}>Contratos Fechados</Typography>

              {!data ? (
                <Loading
                  size={30}
                  isLoading
                  style={{
                    marginTop: 8,
                    marginLeft: 8,
                    justifyContent: "flex-start",
                  }}
                />
              ) : (
                <Typography className={classes.closedContracts}>
                  {data.closedContracts}
                </Typography>
              )}
            </Flex>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} width="14vw">
            <Flex className={classes.flex}>
              <Typography fontSize={16}>
                Valor total - Contratos fechados
              </Typography>

              {!data ? (
                <Loading
                  size={30}
                  isLoading
                  style={{
                    marginTop: 8,
                    marginLeft: 8,
                    justifyContent: "flex-start",
                  }}
                />
              ) : (
                <Typography fontSize={24} fontWeight="bold">
                  {data.closedContractsValue}
                </Typography>
              )}
            </Flex>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} width="14vw">
            <Flex className={classes.flex}>
              <Typography fontSize={16}>Valor total - Comissão</Typography>

              {!data ? (
                <Loading
                  size={30}
                  isLoading
                  style={{
                    marginTop: 8,
                    marginLeft: 8,
                    justifyContent: "flex-start",
                  }}
                />
              ) : (
                <Typography fontSize={24} fontWeight="bold">
                  {data.commissionValue}
                </Typography>
              )}
            </Flex>
          </Card>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={7}>
          <Card
            className={classes.cardOutlined}
            width="27.5vw"
            style={{ height: "auto" }}
          >
            <Flex className={classes.flex}>
              <Typography fontSize={18} fontWeight="bold">
                Link de Indicação
                <Typography fontSize={16}>
                  (envie para o seu cliente entrar na sua rede)
                </Typography>
              </Typography>

              {!data ? (
                <Loading
                  size={30}
                  isLoading
                  style={{
                    marginTop: 8,
                    marginLeft: 8,
                    justifyContent: "flex-start",
                  }}
                />
              ) : (
                <TextField
                  variant="outlined"
                  id="textfield-dashboard-link"
                  className={classes.textfield}
                  value={data.link}
                  // onChange={(e) => setToken(e.target.value)}
                />
              )}
            </Flex>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} width="14vw" style={{ marginTop: 24 }}>
            <Flex className={classes.flex}>
              <Typography fontSize={16}>Valor total - A receber</Typography>

              {!data ? (
                <Loading
                  size={30}
                  isLoading
                  style={{
                    marginTop: 8,
                    marginLeft: 8,
                    justifyContent: "flex-start",
                  }}
                />
              ) : (
                <Typography fontSize={24} fontWeight="bold">
                  {data.receivable}
                </Typography>
              )}
            </Flex>
          </Card>
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={12}>
          {!data ? (
            <Loading
              size={60}
              isLoading
              style={{
                margin: 16,
                justifyContent: "flex-start",
                height: 325,
              }}
            />
          ) : (
            <ApagarDpsIcon2 style={{ marginTop: 40 }} />
          )}
        </Grid>

        <Grid item xs={1} style={{ marginTop: 8 }}>
          <Link to="/manager/clientManagement" className={classes.link}>
            <Card className={classes.card2} width="8.5vw">
              <Flex center fullHeight>
                <PersonIcon />
                <Typography
                  fontSize={22}
                  style={{ marginLeft: 8, color: "#727272" }}
                >
                  Clientes
                </Typography>
              </Flex>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={1} style={{ marginLeft: 60, marginTop: 8 }}>
          <Link to="/manager/supportList" className={classes.link}>
            <Card className={classes.card2} width="8.5vw">
              <Flex center fullHeight>
                <SupportIcon />
                <Typography
                  fontSize={22}
                  style={{ marginLeft: 8, color: "#727272" }}
                >
                  Suporte
                </Typography>
              </Flex>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles((theme) => ({
  pageTitle: {
    fontWeight: "bold",
    fontSize: 28,
  },
  textfield: {
    width: "90%",
    // background: "#FFFFFF",
    // border: "1px solid #05C7F2",
    // borderRadius: 29,
    marginTop: 8,
  },
  card: {
    width: 149,
    height: 84,

    background: theme.palette.white,
    borderRadius: "14px",
    marginTop: 8,
  },

  card2: {
    width: 149,
    height: 60,

    background: theme.palette.white,
    borderRadius: "14px",
    marginTop: 16,
  },
  flex: {
    padding: "14px 16px",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  cardOutlined: {
    width: 511,
    height: 84,
    border: "1px solid #CBCBCB",
    borderRadius: "16px",
    marginTop: 24,
    background: "transparent",
  },
  closedContracts: {
    color: theme.palette.purple,
    fontSize: 28,
    fontWeight: "bold",
  },
  totalClients: {
    color: theme.palette.primary.main,
    fontSize: 28,
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
  },

  container: {
    opacity: 0,
    paddingLeft: 0,
    paddingRight: "3vw",
    animation: theme.animations.translatePageContainer.animation,
  },

  [theme.animations.translatePageContainer.keyframeName]:
    theme.animations.translatePageContainer.keyframeValue,
}))(Dashboard);
