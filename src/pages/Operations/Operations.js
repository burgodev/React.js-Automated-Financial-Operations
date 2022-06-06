import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, InputLabel } from "@material-ui/core";

// import api from "../../services/api";
import {
  Flex,
  Typography,
  Container,
  TextField,
  Table,
} from "../../_common/components";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Operations = ({ classes }) => {
  const [data] = useState([]);
  const [filtro, setFiltro] = useState({
    data: "",
    status: "",
    type: [],
    duration: "",
    lot: "",
    swap: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOperations();
  }, []);

  const getOperations = async () => {
    try {
      // const resp = await api.get("/operations");
      setLoading(true);
      // setData(mockup);
      // setTimeout(() => setData(resp.data), 1000);
      setTimeout(() => setLoading(false), 1000);
    } catch (e) {}
  };

  return (
    <Container className={classes.container}>
      <Flex alignItems="center">
        <Typography className={classes.pageTitle}>Operações</Typography>
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
            Ativo
          </InputLabel>
          <TextField
            className={classes.textfield}
            variant="filled"
            id="textfield-operations-data"
            value={filtro.status}
            onChange={(e) => setFiltro({ ...filtro, status: e.target.value })}
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
            Duração
          </InputLabel>
          <TextField
            className={classes.textfield}
            variant="filled"
            id="textfield-operations-data"
            type="date"
            value={filtro.duration}
            onChange={(e) => setFiltro({ ...filtro, duration: e.target.value })}
          />
        </Flex>

        <Flex flexDirection="column">
          <InputLabel
            htmlFor="textfield-operations-data"
            style={{ marginBottom: 6, color: "#373839" }}
          >
            Lote
          </InputLabel>
          <TextField
            className={classes.textfield}
            variant="filled"
            id="textfield-operations-data"
            type="number"
            value={filtro.lot}
            onChange={(e) => setFiltro({ ...filtro, lot: e.target.value })}
          />
        </Flex>

        <Flex flexDirection="column">
          <InputLabel
            htmlFor="textfield-operations-data"
            style={{ marginBottom: 6, color: "#373839" }}
          >
            Lucro
          </InputLabel>
          <TextField
            className={classes.textfield}
            variant="filled"
            id="textfield-operations-data"
            type="number"
            value={filtro.profit}
            onChange={(e) => setFiltro({ ...filtro, profit: e.target.value })}
          />
        </Flex>

        <Flex flexDirection="column">{/* robos */}</Flex>
      </Flex>
      <Flex>
        <Table
          transparent
          headers={headers}
          initialValues={data}
          loading={loading}
        />
      </Flex>
    </Container>
  );
};

const headers = [
  { id: 0, text: "Data" },
  { id: 1, text: "Ativo" },
  { id: 2, text: "Tipo" },
  { id: 3, text: "Preço inicial" },
  { id: 4, text: "Preço final" },
  { id: 5, text: "Duração" },
  { id: 6, text: "Lote" },
  // { id: 7, text: "Taxa Swap" },
  // { id: 8, text: "Drawdown" },
  { id: 9, text: "Lucro" },
];

// const mockup = [
//   {
//     id: 0,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
//   {
//     id: 1,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
//   {
//     id: 2,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
//   {
//     id: 3,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
//   {
//     id: 4,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
//   {
//     id: 5,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
//   {
//     id: 6,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
//   {
//     id: 7,
//     time: "01/03/2021 18:45:12",
//     currency: "AUD-USD",
//     type: "Compra",
//     initialPrice: "5.34111",
//     finalPrice: "5.85032",
//     duration: "2 dias 12:35:50",
//     lot: "0,50",
//     swap: "R$ 1,38",
//     drawdown: "7,56%",
//     profit: "R$ 420,00",
//   },
// ];

export default withStyles((theme) => ({
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

  pageTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  textfield: {
    width: 180,
    marginRight: 8,
  },
}))(Operations);
