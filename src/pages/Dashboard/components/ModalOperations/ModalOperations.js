import React from "react";
import PropTypes from "prop-types";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  withStyles,
} from "@material-ui/core";

import {
  Flex,
  Typography,
  Card,
  Button,
  Table,
} from "../../../../_common/components";
import image from "../../../../assets/bg1.jpg";

PropTypes.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
  operations: PropTypes.array,
};

const ModalOperations = ({ classes, onClose, operations }) => {
  return (
    <Card borderRadius={27} className={classes.card}>
      <Flex className={classes.flex}>
        <DialogTitle disableTypography className={classes.title}>
          <Button
            variant="text"
            onClick={() => onClose()}
            className={classes.button}
          >
            {"<- Início"}
          </Button>
          <Typography fontWeight="bold" fontSize={30}>
            Operações gerais do dia
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Table
            headers={headers}
            initialValues={operations}
            color="transparent"
          ></Table>
        </DialogContent>
        <DialogActions></DialogActions>
      </Flex>
    </Card>
  );
};

const headers = [
  { id: 0, text: "Hora" },
  { id: 1, text: "Ativo" },
  { id: 2, text: "Tipo" },
  { id: 3, text: "Preço" },
  { id: 4, text: "Preço final" },
  { id: 5, text: "Lote total" },
  { id: 6, text: "ID transação" },
  { id: 7, text: "Lucro" },
];

// const mockup = [
//   {
//     id: 0,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 1,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 2,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 3,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 4,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 5,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 6,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 7,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
//   {
//     id: 8,
//     time: "10:55:59",
//     currency: "AUD-USD",
//     type: "Compra",
//     price: "$20",
//     finalPrice: "$30",
//     fullLot: "1",
//     transactionId: "613179",
//     profit: "$50",
//   },
// ];

export default withStyles((theme) => ({
  title: {
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },

  button: {
    textTransform: "capitalize",
    marginBottom: 18,
    padding: 0,
  },

  flex: {
    flexDirection: "column",
    padding: "24px 31px",
  },
  card: {
    backgroundImage: `linear-gradient(to right bottom, rgb(255 255 255 / 95%), rgb(255 255 255 / 97.5%)),url(${image})`,
    backgroundColor: "transparent",
  },
}))(ModalOperations);
