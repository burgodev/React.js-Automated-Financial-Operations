import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, InputLabel } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import {
  Flex,
  Typography,
  TextField,
  Container,
  Card,
  Divider,
  Loading,
} from "../../../_common/components";
import api from "../../../services/api";
import { PersonIcon } from "../../../_common/components/Icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const ClientManagement = ({ classes }) => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [totalPages /*setTotalPages*/] = useState(5);
  const [filtro, setFiltro] = useState({
    data: "",
    status: "",
    type: [],
    duration: "",
    lot: "",
    swap: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await api.get("/clientManagement");
      setTimeout(() => setData(resp.data), 1000);
    } catch (e) {}
  };

  return (
    <Container className={classes.container}>
      <Flex alignItems="center">
        <Typography className={classes.pageTitle}>
          Gestão de Clientes
        </Typography>
      </Flex>
      <Flex alignItems="center" style={{ marginTop: 28, marginBottom: 16 }}>
        <Flex flexDirection="column">
          <InputLabel
            htmlFor="textfield-operations-data"
            style={{ marginBottom: 6, color: "#373839" }}
          >
            Data
          </InputLabel>
          <TextField
            className={classes.textfield}
            variant="filled"
            id="textfield-operations-data"
            type="date"
            value={filtro.data}
            onChange={(e) => setFiltro({ ...filtro, data: e.target.value })}
          />
        </Flex>

        <Flex flexDirection="column">
          <InputLabel
            htmlFor="textfield-operations-data"
            style={{ marginBottom: 6, color: "#373839" }}
          >
            Tipo
          </InputLabel>
          <TextField
            select
            className={classes.textfield}
            variant="filled"
            id="textfield-operations-data"
            type="date"
            value={filtro.type}
            onChange={(e) => setFiltro({ ...filtro, type: e.target.value })}
          />
        </Flex>

        <Flex flexDirection="column">
          <InputLabel
            htmlFor="textfield-operations-data"
            style={{ marginBottom: 6, color: "#373839" }}
          >
            Nome
          </InputLabel>
          <TextField
            className={classes.textfield}
            style={{ width: 248 }}
            variant="filled"
            id="textfield-operations-data"
            value={filtro.lot}
            onChange={(e) => setFiltro({ ...filtro, lot: e.target.value })}
          />
        </Flex>
      </Flex>

      {/* {true ? ( */}
      {typeof data === "undefined" ? (
        <Loading
          size={80}
          isLoading
          style={{
            height: "60%",
          }}
        />
      ) : (
        data.map((item) => (
          <Card
            className={classes.card}
            style={{ marginTop: 12, padding: "8px 0 8px 24px" }}
          >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              height="100%"
              style={{ height: "100%" }}
            >
              <Flex center style={{ height: "100%" }}>
                <PersonIcon />
                <Typography
                  fontSize={16}
                  style={{ width: 107, marginLeft: 16 }}
                >
                  {item.name}
                </Typography>
                <Divider vertical style={{ marginLeft: 8 }} />
              </Flex>

              <Flex center flexDirection="column">
                <Typography className={classes.typography}>
                  Valor disponível
                </Typography>
                <Typography className={classes.green}>
                  $ {item.availableValue}
                </Typography>
              </Flex>
              <Flex center flexDirection="column">
                <Typography className={classes.typography}>
                  Valor bloqueado
                </Typography>
                <Typography className={classes.red}>
                  $ {item.blockedValue}
                </Typography>
              </Flex>
              <Flex center flexDirection="column">
                <Typography className={classes.typography}>Retorno</Typography>
                <Typography>$ {item.return}</Typography>
              </Flex>
              <Flex center flexDirection="column">
                <Typography className={classes.typography}>Contato</Typography>
                <Typography>{item.contact}</Typography>
              </Flex>
              <Flex
                // alignItems="center"
                justifyContent="center"
                flexDirection="column"
                height="100%"
                style={{ height: "100%" }}
              >
                <Card
                  style={{
                    width: 75,
                    height: 28,
                    background: "#05C7F2",
                    borderRadius: "10px 0px 0px 10px",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography> Gestor</Typography>
                </Card>
                <Card
                  style={{
                    marginTop: 12,
                    width: 75,
                    height: 28,
                    background: "#373839",
                    borderRadius: "10px 0px 0px 10px",

                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography> N1</Typography>
                </Card>
              </Flex>
            </Flex>
          </Card>
        ))
      )}

      <Flex center>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          style={{ marginTop: 24 }}
        />
      </Flex>
    </Container>
  );
};

// const MOCKUP = [
//   {
//     id: 0,
//     name: "Filipe Burgonovo",
//     availableValue: "500,00",
//     blockedValue: "500,00",
//     return: "50,00",
//     contact: "47 999001676",
//   },
//   {
//     id: 1,
//     name: "Thabata Figueiredo",
//     availableValue: "500,00",
//     blockedValue: "500,00",
//     return: "50,00",
//     contact: "47 999001676",
//   },
//   {
//     id: 2,
//     name: "Nicolas Junkes",
//     availableValue: "500,00",
//     blockedValue: "500,00",
//     return: "50,00",
//     contact: "47 999001676",
//   },
//   {
//     id: 3,
//     name: "Julio Mueller",
//     availableValue: "500,00",
//     blockedValue: "500,00",
//     return: "50,00",
//     contact: "47 999001676",
//   },
//   {
//     id: 4,
//     name: "Giulio Giovanella",
//     availableValue: "500,00",
//     blockedValue: "500,00",
//     return: "50,00",
//     contact: "47 999001676",
//   },
// ];

export default withStyles((theme) => ({
  pageTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  textfield: {
    width: 180,
    marginRight: 8,
  },
  container: {
    opacity: 0,
    paddingLeft: 0,
    paddingRight: "3vw",
    animation: `$translate .5s ease-out forwards`,
  },
  "@keyframes translate": {
    to: {
      opacity: 1,
      paddingLeft: "4vw",
    },
  },
  card: {
    width: "85%",
    height: 110,
    // background: #FFFFFF
    boxShadow: "4px 4px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "13px",
  },
  typography: {
    fontSize: 16,
    // fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  green: {
    color: theme.palette.green,
  },
  red: {
    color: theme.palette.red,
  },
}))(ClientManagement);
