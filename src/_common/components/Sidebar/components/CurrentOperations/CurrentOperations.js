import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { Flex, Typography, Button, Card, Loading } from "../../..";
import { LeftArrowIcon } from "../../../Icons";
import { ModalOperations } from "../../../../../pages/Dashboard/components";
// import api from "../../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const CurrentOperations = ({ classes }) => {
  const [openModal, setOpenModal] = useState(false);
  const [operations] = useState([]);

  useEffect(() => {
    getOperations();
  }, []);

  const getOperations = async () => {
    try {
      // const resp = await api.get("/operations");
      // setTimeout(() => setOperations(resp.data), 1000);
    } catch (e) {}
  };

  return (
    <>
      <Flex alignItems="center" className={classes.title}>
        <Typography fontWeight="bold" fontSize={20}>
          Operações atuais:
        </Typography>
      </Flex>
      <Flex alignItems="center" className={classes.flexBtn}>
        <Button
          variant="icon"
          onClick={() => setOpenModal(true)}
          className={classes.button}
        >
          <LeftArrowIcon />
          <Typography className={classes.buttonText}>
            Ver mais <br />
            operações
          </Typography>
        </Button>
      </Flex>

      <Card clean className={classes.card}>
        {/* {OPERATION.map(({ id, text, value }) => (
          <Flex
            className={classes.row}
            style={{ marginTop: id === 0 ? 0 : null }}
            key={id}
          >
            <Typography fontSize={16}>{text}</Typography>
            <Typography className={classes.typography}>{value}</Typography>
          </Flex>
        ))} */}

        <Flex className={classes.row}>
          <Typography fontSize={16}>Hora:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.hour
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>

        <Flex className={classes.row}>
          <Typography fontSize={16}>Ativo:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.currency
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>

        <Flex className={classes.row}>
          <Typography fontSize={16}>Tipo:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.type
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>

        <Flex className={classes.row}>
          <Typography fontSize={16}>Preço:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.price
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>

        <Flex className={classes.row}>
          <Typography fontSize={16}>Preço Final:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.finalPrice
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>

        <Flex className={classes.row}>
          <Typography fontSize={16}>Lote Total:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.totalLot
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>

        <Flex className={classes.row}>
          <Typography fontSize={16}>ID transação:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.transactionId
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>

        <Flex className={classes.row}>
          <Typography fontSize={16}>Lucro:</Typography>
          <Typography className={classes.typography}>
            {!!operations[0] ? (
              operations[0]?.profit
            ) : (
              <Loading size={15} isLoading className={classes.loading} />
            )}
          </Typography>
        </Flex>
      </Card>

      <ModalOperations
        open={openModal}
        operations={operations}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

// const OPERATION = [
//   { id: 0, text: "Hora: ", value: "18:25:03" },
//   { id: 1, text: "Ativo: ", value: "AUD/NZD" },
//   { id: 2, text: "Tipo: ", value: "Compra" },
//   { id: 3, text: "Preço: ", value: "$5,610" },
//   { id: 4, text: "Preço final: ", value: "$5,750" },
//   { id: 5, text: "Lote total: ", value: "1" },
//   { id: 6, text: "ID transação: ", value: "1601420" },
//   { id: 7, text: "Lucro: ", value: "$56,58" },
// ];;

export default withStyles((theme) => ({
  card: {
    marginTop: 8,
    // width: 213,
    borderRadius: 1,
    // padding: "8px 7px 8px 10px",
    padding: "16px 10px 12px",
  },
  title: {
    marginTop: 51,
  },

  flexBtn: {
    marginTop: 18,
  },
  button: {
    textTransform: "none",
  },

  buttonText: {
    fontWeight: "bold",
    textAlign: "left",
    lineHeight: "14px",
    fontSize: "13px",
    marginLeft: "5px",
    color: theme.palette.text.primary,
  },
  typography: {
    fontSize: 16,
    textAlign: "right",
    color: theme.palette.primary.main,
  },
  row: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 11,
  },
  loading: { marginRight: 24 },
}))(CurrentOperations);
