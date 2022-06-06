import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useFormikContext } from "formik";
import visaIcon from "./../../../../../../../assets/visa.png";
import masterIcon from "./../../../../../../../assets/mastercard.svg";

import { Flex, Typography } from "../../../../../../../_common/components";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const Boleto = ({ classes }) => {
  const { values } = useFormikContext();
  const i18n = useTranslation().t;
  return (
    <>
      <Typography
        textAlign="center"
        fontSize="1.5rem"
        fontWeight={700}
        style={{ marginTop: "35px" }}
      >
        {i18n("Signatures.SignatureReview.total_value")}{" "}
        {values.bot.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      <Typography textAlign="center">
        {i18n("Signatures.SignatureReview.subscription_label")}{" "}
        {values.bot.cycle === "monthly"
          ? i18n("Signatures.Bots.cycle_type_monthly")
          : values.bot.cycle === "semiannually"
          ? i18n("Signatures.Bots.cycle_type_semiannually")
          : values.bot.cycle === "yearly"
          ? i18n("Signatures.Bots.cycle_type_yearly")
          : ""}{" "}
        {/* - pagamento à vista */}
      </Typography>
      <Flex flexDirection="column" className={classes.content}>
        <Flex className={classes.topCard}>
          <Typography fontWeight={700} fontSize="0.8rem">
            {values.paymentType === "CREDIT_CARD" ? "CREDIT CARD" : "CARD"}
          </Typography>
          {values.payment.card_flag === "visa" ? (
            <img src={visaIcon} width={35} alt="Visa icon" />
          ) : (
            <img src={masterIcon} width={35} alt="Mastercard icon" />
          )}
        </Flex>
        <Flex flexDirection="column">
          <Typography fontSize="1.3rem" fontWeight={700}>
            {values.payment.cardNumber
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim()}
          </Typography>
          <Typography>
            {values.payment.expiry_month}/{values.payment.expiry_year}
          </Typography>
          <Typography className={classes.cardHolder}>
            {values.payment.name}
          </Typography>
        </Flex>
      </Flex>
    </>
  );
};

export default withStyles((theme) => ({
  content: {
    width: "350px",
    height: "165px",
    border: "1px solid #b9b7b785",
    borderRadius: "8px",
    padding: "15px 15px",
    margin: "40px 0",
  },
  topCard: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  cardHolder: {
    fontSize: "1.2rem",
    fontWeight: 500,
    marginTop: "28px",
    textTransform: "uppercase",
  },
}))(Boleto);
