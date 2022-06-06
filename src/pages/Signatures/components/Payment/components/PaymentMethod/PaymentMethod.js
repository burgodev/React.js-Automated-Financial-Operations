import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Checkbox,
  FormControlLabel,
  Collapse,
} from "@material-ui/core";
import { useFormikContext } from "formik";
import api from "../../../../../../services/api";

import { Button, Card, Typography } from "../../../../../../_common/components";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const PaymentMethod = ({ classes, nextStep }) => {
  const [items, setItems] = React.useState([]);
  const [cards, setCards] = useState([]);
  const [labelPaymentType, setLabelPaymentType] = useState("");
  const { values, setValues } = useFormikContext();
  const [collapsed, setCollapsed] = useState(false);
  const [cardSaved, setCardSaved] = useState("");
  const i18n = useTranslation().t;

  useEffect(() => {
    getData();
    getCardData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await api.get("/payment-methods");
      setItems(data.payload);
    } catch (error) {}
  };

  const getCardData = async () => {
    try {
      const { data } = await api.get("/cards");
      setCards(data.payload);
    } catch (error) {}
  };

  const handleChangePaymentInformation = (paymentType, paymentMethod) => {
    setValues({
      ...values,
      payment: {
        cardNumber: "",
        name: "",
        cpf: "",
        phone: "",
        expiry_month: "",
        expiry_year: "",
      },
      paymentType: paymentType,
      paymentMethod: paymentMethod,
    });
  };

  const handleChangePaymentType = (id, name) => {
    if (name === "Cartão de crédito") {
      setCardSaved("");
      setLabelPaymentType("Cartão de crédito");
      handleChangePaymentInformation("CREDIT_CARD", id);
    } else if (name === "Boleto") {
      setCardSaved("");
      setLabelPaymentType("Boleto");
      handleChangePaymentInformation("BOLETO", id);
    } else if (name === "Pix") {
      setCardSaved("");
      setLabelPaymentType("Pix");
      handleChangePaymentInformation("PIX", id);
    }
    setCollapsed(false);
  };

  const handleSelectedCard = (card) => {
    setValues({
      ...values,
      paymentMethod: "STORED_CREDIT_CARD",
      paymentType: "CREDIT_CARD",
      payment: {
        cardId: card.id,
        cardNumber: card.number,
        name: card.cardholder,
        expiry_month: card.expiry_month,
        expiry_year: card.expiry_year,
      },
    });
    setCollapsed(false);
  };

  return (
    <>
      <Card
        className={`${classes.card} ${classes.collapseCard}`}
        onClick={() => setCollapsed(!collapsed)}
        style={{ border: collapsed && "1px solid #727272" }}
      >
        {labelPaymentType === ""
          ? `${i18n("Signatures.Payment.PaymentMethod.payment_method_select")}`
          : `${i18n(
              "Signatures.Payment.PaymentMethod.payment_method_select"
            )} - ${labelPaymentType}`}
        {collapsed ? <ExpandLess /> : <ExpandMore />}
      </Card>

      <Collapse in={collapsed}>
        {cards.length > 0 &&
          cards.map((card) => (
            <Card className={classes.card} key={card.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => handleSelectedCard(card)}
                    name="paymentMethod"
                    color="primary"
                    checked={values.payment.cardId === card.id}
                  />
                }
                label={`${i18n(
                  "Signatures.Payment.PaymentMethod.credit_card_with_final"
                )} ${card.number.substr(-4)}`}
              />
            </Card>
          ))}
        {items.map((item) => (
          <Card className={classes.card} key={item.id}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => handleChangePaymentType(item.id, item.name)}
                  name="paymentMethod"
                  color="primary"
                  checked={values.paymentMethod === item.id}
                  disabled={item.id === "77ab5019-9591-40f9-a24b-d54e43ab1a75"}
                  value={item.id}
                />
              }
              label={item.name}
            />
          </Card>
        ))}
      </Collapse>
    </>
  );
};

export default withStyles((theme) => ({
  collapseCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.3rem",
    fontWeight: 600,
  },
  card: {
    width: "auto",
    padding: "8px 16px",
    marginBottom: "5px",
    background: "#FFF",
    borderRadius: 5,
    border: "1px solid grey",
    cursor: "pointer",
    fontSize: "1.1rem",
  },
  button: {
    width: "100%",
    height: 44,
    margin: "16px auto 0",
  },
}))(PaymentMethod);
