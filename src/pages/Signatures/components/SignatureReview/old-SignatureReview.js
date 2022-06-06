import React, { useState } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import { SelectLogo } from "../../../../_common/components/Icons";
import {
  Flex,
  Typography,
  Card,
  Divider,
  Button,
} from "../../../../_common/components";
import ModalSuccessSubscription from "./components/ModalSuccessSubscription";

import api from "../../../../services/api";
import ModalRefusedSubscription from "./components/ModalRefusedSubscription";
import ModalSuccessSimulation from "./components/ModalSuccessSimulation";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const SignatureReview = ({ classes, nextStep }) => {
  const { values } = useFormikContext();
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [openModalRefused, setOpenModalRefused] = useState(false);
  const [openModalSimulation, setOpenModalSimulation] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscription = async () => {
    try {
      setLoading(true);
      if (!values.bot.simulation) {
        await api.post("subscriptions/asaas/subscription", {
          subscription_plan_id: values.bot.id,
          broker_number: values.account.id,
          payment_method_id: values.paymentMethod,
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
        {values.bot.simulation
          ? "Revisão de simulação"
          : "Revisão de assinatura"}
      </Typography>

      <Flex
        center
        className={classes.flex}
        justifyContent={values.bot.simulation ? "flex-start" : null}
      >
        <Card className={classes.accountCard}>
          <Flex flexDirection="column">
            <Typography fontSize={18}>Nome da corretora</Typography>
            <Typography
              fontWeight="bold"
              fontSize={20}
              className={classes.textColor}
            >
              <SelectLogo />
            </Typography>
            <Typography>ID da conta</Typography>
            <Typography
              fontWeight="bold"
              fontSize={20}
              className={classes.textColor}
            >
              {values.account.id}
            </Typography>
          </Flex>
        </Card>
        <Card className={classes.card}>
          <Flex flexDirection="column" center className={classes.translateY}>
            {values.bot.icon}

            <Typography
              className={classes.botName}
              fontWeight="bold"
              fontSize={24}
            >
              {values.bot.name}
            </Typography>

            <Typography textAlign="center" width={200}>
              Recomendado para investidores {values.bot.recomendation}
            </Typography>
            <Divider width="80%" margin="12px 0 18px 0" />
            <Typography textAlign="center">Retorno Aproximado</Typography>
            <Typography
              color={values.bot.color}
              className={classes.profitability}
            >
              {values.bot.profitability}
            </Typography>

            {values.bot?.simulation ? (
              <Typography fontWeight="bold" fontSize={24}>
                Gratuito
              </Typography>
            ) : (
              <Typography fontWeight="bold" fontSize={24}>
                {values.id !== 0 && "R$ "}
                {values.bot.price_label}
              </Typography>
            )}
          </Flex>
        </Card>
        {!values.bot.simulation && (
          <Card className={classes.creditCard}>
            <Flex flexDirection="column">
              <Typography>Cartão</Typography>
              <Typography
                fontWeight="bold"
                fontSize={20}
                className={classes.textColor}
              >
                {values.payment.cardNumber}
              </Typography>
              <Typography fontSize={14} className={classes.lightTextColor}>
                {values.bot.price !== "Gratuito" && "1x "}
                <Typography
                  fontWeight="bold"
                  fontSize={22}
                  className={classes.textColor}
                >
                  {
                    (values.bot.price === "Gratuito" ? "Gratuito " : "R$ ",
                    values.bot.price)
                  }
                </Typography>{" "}
                Sem cupom
              </Typography>
            </Flex>
          </Card>
        )}
        {values.bot.simulation && (
          <Card className={classes.creditCard}>
            <Flex flexDirection="column">
              <Typography
                fontWeight="bold"
                fontSize={20}
                className={classes.textColor}
              >
                Simulação Gratuita
              </Typography>
            </Flex>
          </Card>
        )}
      </Flex>
      {/* {values.bot.id === 0 && (
        <Typography>
          Assine este robô gratuitamente e rentabilize suas operações em até{" "}
          <Typography color={values.bot.color} fontSize={18}>
            {values.profitability}
          </Typography>
        </Typography>
      )} */}

      <Button
        className={classes.button}
        onClick={handleSubscription}
        loading={loading}
        style={{
          boxShadow: `1px 1px 20px ${values.bot.color}`,
          background: values.bot.color,
        }}
      >
        {values.bot.simulation ? "Confirmar simulação" : "Confirmar assinatura"}
      </Button>
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
  card: {
    zIndex: 1,
    width: 240,
    height: 350,
    boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    margin: "0 16px",
    "&:after": {
      background: "red",
      content: "aaaa",
      height: 100,
      width: 100,
    },
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  accountCard: {
    transform: "translateX(50px)",

    width: 260,
    height: 160,
    border: "2px solid #BEBEBE",
    boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    background: "transparent",

    padding: 24,
  },
  creditCard: {
    transform: "translateX(-50px)",

    width: 280,
    height: 160,
    border: "2px solid #BEBEBE",
    boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    background: "transparent",

    padding: "24px 16px 24px 54px",
  },
  flex: {
    width: "50%",
    marginBottom: 32,
    marginTop: 64,
  },
  textColor: {
    color: "#969696",
  },
  lightTextColor: {
    color: "#BEBEBE",
  },
  translateY: {
    transform: "translateY(-42px)",
  },
  botName: {
    margin: "24px 0",
  },
  profitability: {
    margin: "14px 0",
    fontSize: 32,
  },
  button: {
    height: 42,
    width: 480,
    marginTop: 8,
  },
}))(SignatureReview);
