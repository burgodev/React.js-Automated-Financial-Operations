import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useFormikContext } from "formik";

import { Flex, Typography, Card, Button } from "../../../../_common/components";
import PaymentMethod from "./components/PaymentMethod";
import AddressMethod from "./components/Address/AddressMethod";
import CreditCard from "./components/CreditCard/CreditCard";
import Boleto from "./components/Boleto/Boleto";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  nextStep: PropTypes.func,
};

const Payment = ({ classes, nextStep }) => {
  const { values, setValues } = useFormikContext();
  const [openAddressMethod, setOpenAddressMethod] = useState(false);
  const i18n = useTranslation().t;

  return (
    <Flex center className={classes.flex}>
      <Card className={classes.card}>
        <Flex center>
          <Typography className={classes.pageTitle}>
            {i18n("Signatures.Payment.payment_title")}
          </Typography>
        </Flex>
        <PaymentMethod />
        {values.paymentType === "CREDIT_CARD" ? (
          <>
            {!openAddressMethod && <CreditCard nextStep={nextStep} />}

            <AddressMethod
              collapsed={openAddressMethod}
              setCollapsed={setOpenAddressMethod}
            />
          </>
        ) : values.paymentType === "BOLETO" ? (
          <Boleto />
        ) : (
          ""
        )}
      </Card>

      <Flex flexDirection="column" width="30%">
        <Typography element="p" textAlign="center" fontSize={14}>
          {i18n("Signatures.Payment.payment_subtitle")}
          <strong> {i18n("InvestorType.all_types")}</strong>.
          {i18n("Signatures.Payment.payment_subtitle_2")}
        </Typography>
        <Button
          type="submit"
          className={classes.button}
          style={{
            boxShadow: `1px 1px 20px ${values.bot?.color}`,
            background: values.bot?.color,
          }}
        >
          {i18n("Buttons.confirm")}
        </Button>
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  flex: {
    flexDirection: "column",
    opacity: 0,
    transform: "translateX(-50px)",
    animation: `$translate .5s ease-out forwards`,
    paddingBottom: "50px",
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
  marginTop: {
    marginTop: 16,
  },
  button: {
    width: "100%",
    height: 44,
    margin: "16px auto 0",
  },
}))(Payment);
