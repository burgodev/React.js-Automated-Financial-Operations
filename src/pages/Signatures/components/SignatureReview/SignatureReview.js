import React, { useState } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import {
  Flex,
  Typography,
  Card,
  Divider,
  Button,
  Snackbar,
} from "../../../../_common/components";
import ModalSuccessSubscription from "./components/ModalSuccessSubscription";

import api from "../../../../services/api";
import ModalRefusedSubscription from "./components/ModalRefusedSubscription";
import ModalSuccessSimulation from "./components/ModalSuccessSimulation";
import { Boleto, CreditCard, Simulation } from "./components/PaymentResume";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const SignatureReview = ({ classes, nextStep }) => {
  const { values } = useFormikContext();
  const navigate = useNavigate();
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [openModalRefused, setOpenModalRefused] = useState(false);
  const [openModalSimulation, setOpenModalSimulation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generateBankSlip, setGenerateBankSlip] = useState(false);
  const [bankSlipUrl, setBankSlipUrl] = useState("");
  const i18n = useTranslation().t;
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "",
    open: false,
  });

  const handleSubscription = async () => {
    try {
      setLoading(true);
      if (values.paymentType === "BOLETO") {
        const result = await api.post("subscriptions/asaas/generate/ticket", {
          name: values.payment.name,
          cpf: values.payment.cpf,
          description: values.bot.name,
          price: values.bot.price,
          subscription_plan_id: values.bot.id,
          payment_method_id: values.paymentMethod,
        });
        setGenerateBankSlip(true);
        setBankSlipUrl(result.data.payload.bankSlipUrl);
        setSnackbar({
          message: i18n("Signatures.SignatureReview.snack_bank_slip"),
          severity: "success",
          open: true,
        });
      }

      if (!values.bot?.simulation && values.paymentType === "CREDIT_CARD") {
        await api.post("subscriptions/asaas/subscription", {
          subscription_plan_id: values.bot.id,
          broker_number: values.account.id,
          payment_method_id:
            values.paymentMethod === "STORED_CREDIT_CARD"
              ? "b738b010-2e96-4c26-b010-e393ca10f5f8"
              : values.paymentMethod,
          payment_type: values.paymentType,
          plan_name: values.bot.name,
          plan_price: values.bot.price,
          card_holderName: values.payment.name,
          card_number: values.payment.cardNumber,
          card_cvv: values.payment.cvv,
          card_expiry_month: values.payment.expiry_month,
          card_expiry_year: values.payment.expiry_year,
          cpf: values.payment.cpf,
          phone: values.payment.phone,
          cep: values.address.cep,
          country_id: values.address.country_id,
          state: values.address.state,
          city: values.address.city,
          street: values.address.street,
          neighborhood: values.address.neighborhood,
          complement: values.address.complement,
          address_number: Number(values.address.number),
        });

        setOpenModalSuccess(true);
      }
      if (values.bot.simulation) {
        await api.post("subscriptions/simulation", {
          subscription_plan_id: values.bot.id,
          broker_number: values.account.id,
        });
        setOpenModalSimulation(true);
      }
    } catch (error) {
      setOpenModalRefused(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex center flexDirection="column" className={classes.container}>
      <ModalSuccessSubscription open={openModalSuccess} nextStep={nextStep} />
      <ModalRefusedSubscription open={openModalRefused} nextStep={nextStep} />
      <ModalSuccessSimulation open={openModalSimulation} nextStep={nextStep} />
      <Typography className={classes.pageTitle}>
        {values.bot?.simulation
          ? i18n("Signatures.SignatureReview.title_simulation")
          : i18n("Signatures.SignatureReview.title_subscription")}
      </Typography>

      <Flex center className={classes.flex} justifyContent="center">
        <Card
          width="70%"
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: "5px",
          }}
        >
          <Typography
            textAlign="center"
            style={{
              background: "#ededed",
              width: "100%",
              borderRadius: "4px",
              fontSize: "1.3rem",
              fontWeight: 600,
              padding: "8px 0",
            }}
          >
            {values.paymentType === "CREDIT_CARD" && !values.bot.simulation
              ? i18n("PaymentType.credit_card")
              : values.paymentType === "BOLETO" && !values.bot.simulation
              ? i18n("PaymentType.bank_slip")
              : values.paymentType === "PIX" && !values.bot.simulation
              ? "Pix"
              : i18n("PaymentType.simulation")}
          </Typography>
          <Flex center flexDirection="column" style={{ margin: "35px 0" }}>
            {values.bot?.icon}

            <Typography fontWeight="bold" fontSize={20}>
              {values.bot?.name}
            </Typography>

            <Typography textAlign="left" fontSize={14}>
              {i18n("Signatures.Bots.recommended_for_inverstor")}{" "}
              {values.bot?.recomendation}
            </Typography>

            <Typography textAlign="right" fontWeight={600} fontSize={20}>
              {values.bot?.profitability}
            </Typography>
          </Flex>
          <Divider />

          <Flex alignItems="center" flexDirection="column">
            {values.paymentType === "CREDIT_CARD" && !values.bot?.simulation ? (
              <CreditCard />
            ) : values.paymentType === "BOLETO" && !values.bot?.simulation ? (
              <Boleto
                generateBankSlip={generateBankSlip}
                bankSlipUrl={bankSlipUrl}
              />
            ) : values.paymentType === "PIX" && !values.bot?.simulation ? (
              "Pix"
            ) : values.bot?.simulation ? (
              <Simulation />
            ) : (
              ""
            )}
          </Flex>
          {generateBankSlip ? (
            <Button
              className={classes.button}
              onClick={() => navigate("/assinaturas")}
              loading={loading}
              style={{
                boxShadow: `1px 1px 20px ${values.bot?.color}`,
                background: values.bot?.color,
              }}
            >
              {i18n("Signatures.SignatureReview.bt_go_to_subscriptions")}
            </Button>
          ) : (
            <Button
              className={classes.button}
              onClick={handleSubscription}
              loading={loading}
              style={{
                boxShadow: `1px 1px 20px ${values.bot?.color}`,
                background: values.bot?.color,
              }}
            >
              {values.bot?.simulation
                ? i18n("Signatures.SignatureReview.bt_confirm_simulation")
                : i18n("Signatures.SignatureReview.bt_confirm_subscription")}
            </Button>
          )}
        </Card>
        <Snackbar data={snackbar} />
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  container: {
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
    fontSize: 30,
  },
  flex: {
    width: "50%",
    marginBottom: 32,
    marginTop: 35,
  },

  button: {
    width: "100%",
    height: 42,
    marginTop: 8,
  },
}))(SignatureReview);
