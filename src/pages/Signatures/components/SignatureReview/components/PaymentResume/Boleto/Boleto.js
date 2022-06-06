import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import {
  Button,
  Flex,
  Typography,
} from "../../../../../../../_common/components";
import { CloudDownload, Visibility } from "@material-ui/icons";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
  generateBankSlip: PropTypes.bool,
  bankSlipUrl: PropTypes.string,
};

const Boleto = ({ classes, generateBankSlip, bankSlipUrl }) => {
  const { values } = useFormikContext();
  const i18n = useTranslation().t;

  const handleOpenBankSlip = () => {
    const win = window.open(bankSlipUrl, "_blank");
    win.focus();
  };
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
      <Flex center flexDirection="column" style={{ margin: "35px 0" }}>
        <Flex>
          <Button
            onClick={handleOpenBankSlip}
            className={classes.btDownload}
            disabled={!generateBankSlip}
          >
            <CloudDownload style={{ fontSize: "2rem", padding: "5px" }} />
            {i18n("Signatures.Payment.BankSlip.bt_download")}
          </Button>
          <Button
            className={classes.btShow}
            onClick={handleOpenBankSlip}
            disabled={!generateBankSlip}
          >
            <Visibility style={{ fontSize: "2rem", padding: "5px" }} />
          </Button>
        </Flex>
        <Typography fontSize="0.85rem" color="red">
          {i18n("Signatures.Payment.BankSlip.need_confirm")}
        </Typography>
      </Flex>
      <Typography
        textAlign="center"
        style={{ margin: "8px 0 5px 0", fontSize: "0.9rem" }}
      >
        {i18n("Signatures.Payment.BankSlip.advise")}
      </Typography>
    </>
  );
};

export default withStyles((theme) => ({
  btDownload: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ededed",
    color: "gray",
    boxShadow: "unset",
    padding: "8px 35px",
    borderRadius: "4px",
    fontWeight: 700,
    fontSize: "1.1rem",
    cursor: "pointer",
  },
  btShow: {
    width: "50px",
    display: "flex",
    boxShadow: "unset",
    alignItems: "center",
    justifyContent: "center",
    background: "#ededed",
    color: "gray",
    borderRadius: "4px",
    padding: "8px 8px",
    marginLeft: "4px",
    fontWeight: 700,
    fontSize: "1.1rem",
    cursor: "pointer",
  },
}))(Boleto);
