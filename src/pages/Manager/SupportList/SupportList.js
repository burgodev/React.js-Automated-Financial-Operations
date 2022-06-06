import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, InputLabel } from "@material-ui/core";

import {
  Flex,
  Typography,
  TextField,
  Table,
  Container,
} from "../../../_common/components";
import api from "../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const SupportList = ({ classes }) => {
  const [data, setData] = useState();
  const [filtro, setFiltro] = useState({
    data: "",
    status: "",
    type: [],
    duration: "",
    lot: "",
    swap: "",
  });
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await api.get("/supportList");
      setTimeout(() => setData(resp.data), 1000);
    } catch (e) {}
  };

  return (
    <Container className={classes.container}>
      <Flex alignItems="center">
        <Typography className={classes.pageTitle}>
          Lista de Suportes{" "}
        </Typography>
      </Flex>
      <Flex alignItems="center" style={{ marginTop: 28, marginBottom: 8 }}>
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
      <Flex>
        <Table
          link={"/manager/supportCenter"}
          transparent
          headers={headers}
          initialValues={data}
          loading={typeof data === "undefined"}
        />
      </Flex>
    </Container>
  );
};

const headers = [
  { id: 0, text: "Data", style: { width: "5%" } },
  { id: 1, text: "Usuário", style: { width: "10%" } },
  { id: 2, text: "Status", style: { width: "10%" } },
  { id: 3, text: "Ticket", style: { width: "10%" } },
  { id: 4, text: "Atendente/Gestor", style: { width: "10%" } },
  { id: 5, text: "Assunto", style: { width: "10%" } },
];

// const mockup =

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
}))(SupportList);
