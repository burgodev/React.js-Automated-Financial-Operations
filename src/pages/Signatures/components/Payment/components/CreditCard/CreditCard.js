import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { InputAdornment, withStyles } from "@material-ui/core";
import { useFormikContext } from "formik";

import {
  Flex,
  Typography,
  Button,
  TextField,
  Snackbar,
} from "../../../../../../_common/components";
import TextMaskNumber from "../../../../../../_common/masks/TextMaskNumber";
import TextMaskCpfCnpj from "../../../../../../_common/masks/TextMaskCpfCnpj";
import SelectYear from "./components/SelectYear/SelectYear";
import SelectMonth from "./components/SelectMonth/SelectMonth";
import visaIcon from "./../../../../../../assets/visa.png";
import masterIcon from "./../../../../../../assets/mastercard.svg";
import { checkCardIsSupported } from "../../../../../../_common/utils/functions/creditCardValidation";

PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  nextStep: PropTypes.func,
};

const CreditCard = ({ classes, nextStep }) => {
  const { values, setValues, setFieldValue, errors, touched, handleChange } =
    useFormikContext();
  const [cardIcon, setCardIcon] = useState("");
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "",
    open: false,
  });

  const validateCard = (value) => {
    const cardValidation = checkCardIsSupported(value);
    if (value.length === 0) {
      setFieldValue("payment.cardNumber", "");
      setCardIcon("");
    }
    if (cardValidation.accepted) {
      setCardIcon(cardValidation.cardIcon);
      setFieldValue("payment.cardNumber", value);
      setValues({
        ...values,
        payment: {
          card_flag: cardValidation.cardIcon,
          cardNumber: value,
        },
      });
    }
  };

  return (
    <>
      <TextField
        color={values.bot.color}
        variant="outlined"
        fullWidth
        id="cardNumber"
        InputProps={{
          inputComponent: TextMaskNumber,
          inputProps: { length: 16 },
          endAdornment: (
            <InputAdornment position="end">
              {cardIcon === "visa" ? (
                <img
                  src={visaIcon}
                  className={classes.cardIcon}
                  alt="Visa icon"
                />
              ) : cardIcon === "mastercard" ? (
                <img
                  src={masterIcon}
                  className={classes.cardIcon}
                  alt="Visa icon"
                />
              ) : (
                cardIcon === "" && ""
              )}
            </InputAdornment>
          ),
        }}
        className={classes.marginTop}
        name="payment.cardNumber"
        size="small"
        s
        label="Número do Cartão"
        value={values.payment.cardNumber}
        onChange={(e) => validateCard(e.target.value)}
        error={
          touched.payment?.cardNumber && Boolean(errors.payment?.cardNumber)
        }
        helperText={touched.payment?.cardNumber && errors.payment?.cardNumber}
        InputLabelProps={{ shrink: true }}
      />

      <Flex
        width="100%"
        justifyContent="space-between"
        className={classes.marginTop}
      >
        <SelectYear onChange={values.payment.expiry_year} />
        <SelectMonth onChange={values.payment.expiry_month} />
        <TextField
          color={values.bot.color}
          variant="outlined"
          style={{
            width: errors.payment?.cvv ? null : 80,
            marginLeft: 16,
          }}
          id="cvv"
          name="payment.cvv"
          InputProps={{
            inputComponent: TextMaskNumber,
            inputProps: { length: 3 },
          }}
          size="small"
          label="CVV"
          value={values.payment.cvv}
          onChange={handleChange}
          error={touched.payment?.cvv && Boolean(errors.payment?.cvv)}
          helperText={touched.payment?.cvv && errors.payment?.cvv}
          InputLabelProps={{ shrink: true }}
        />
      </Flex>
      <TextField
        color={values.bot.color}
        className={classes.marginTop}
        variant="outlined"
        fullWidth
        id="value"
        name="payment.name"
        size="small"
        label="Nome do titular do cartão"
        value={values.payment.name}
        onChange={handleChange}
        error={touched.payment?.name && Boolean(errors.payment?.name)}
        helperText={touched.payment?.name && errors.payment?.name}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        color={values.bot.color}
        className={classes.marginTop}
        variant="outlined"
        fullWidth
        id="value"
        name="payment.cpf"
        size="small"
        label="CPF"
        value={values.payment.cpf}
        onChange={handleChange}
        error={touched.payment?.cpf && Boolean(errors.payment?.cpf)}
        helperText={touched.payment?.cpf && errors.payment?.cpf}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          inputComponent: TextMaskCpfCnpj,
        }}
      />
      <TextField
        color={values.bot.color}
        className={`${classes.marginTop}`}
        variant="outlined"
        fullWidth
        id="phone"
        label="Telefone para contato com DDD"
        name="payment.phone"
        size="small"
        value={values.payment.phone}
        onChange={handleChange}
        error={touched.payment?.phone && Boolean(errors.payment?.phone)}
        helperText={touched.payment?.phone && errors.payment?.phone}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        color={values.bot.color}
        className={`${classes.marginTop} ${classes.marginBottom}`}
        variant="outlined"
        fullWidth
        id="discount"
        label="Cupom de desconto"
        name="payment.discount"
        size="small"
        value={values.payment.discount}
        onChange={handleChange}
        error={touched.payment?.discount && Boolean(errors.payment?.discount)}
        helperText={touched.payment?.discount && errors.payment?.discount}
        InputLabelProps={{ shrink: true }}
      />

      <Snackbar data={snackbar} />
    </>
  );
};

export default withStyles((theme) => ({
  flex: {
    opacity: 0,
    transform: "translateX(-50px)",
    animation: `$translate .5s ease-out forwards`,
  },
  "@keyframes translate": {
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },

  pageTitle: {
    fontWeight: "bold",
    fontSize: 28,
    margin: "auto",
    marginBottom: 32,
  },
  card: {
    width: 480,
    background: "transparent",
  },
  cardIcon: {
    width: "35px",
  },
  marginTop: {
    marginTop: 16,
  },
  marginBottom: {
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 44,
    margin: "16px auto 0",
  },
}))(CreditCard);
