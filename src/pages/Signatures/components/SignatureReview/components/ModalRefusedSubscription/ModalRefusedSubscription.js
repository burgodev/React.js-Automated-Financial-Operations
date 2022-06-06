import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import {
  Flex,
  Typography,
  Button,
  Card,
} from "../../../../../../_common/components";
import subscriptionRefusedImg from "../../../../../../assets/modal-subscription-refused.svg";
import paymentSuccessImg from "../../../../../../assets/payment-success.svg";
import { theme } from "../../../../../../_common/utils/theme";
import { useFormikContext } from "formik";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const ModalRefusedSubscription = ({ classes, nextStep }) => {
  const { values } = useFormikContext();
  const i18n = useTranslation().t;

  const handleBackToPayment = () => {
    nextStep(3);
  };

  return (
    <Card className={classes.card}>
      <img
        width="165"
        src={subscriptionRefusedImg}
        alt="Alert subscription failed"
      />
      {values.paymentType === "CREDIT_CARD" ? (
        <Flex center width="50%">
          <img
            src={paymentSuccessImg}
            alt="Wallet payment success"
            width="80"
          />

          <Typography className={classes.paymentWarningMessage}>
            {i18n("Modal.RefusedSubscription.payment_failed")}
          </Typography>
        </Flex>
      ) : values.paymentType === "BOLETO" ? (
        <>
          <Typography className={classes.refusedGenerate}>
            {i18n("Modal.RefusedSubscription.failed_on_generate_bank_slip")}
          </Typography>
        </>
      ) : (
        ""
      )}
      <Typography className={classes.paymentDataReview}>
        {i18n("Modal.RefusedSubscription.review_your_payment")}
      </Typography>
      <Button
        width="80%"
        height="60px"
        fontSize="1.40rem"
        background="white"
        color={theme.palette.primary.main}
        onClick={handleBackToPayment}
      >
        {i18n("Modal.RefusedSubscription.bt_try_again")}
      </Button>
    </Card>
  );
};

export default withStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.gradient.default,
    boxShadow: "10px 10px 50px rgba(0, 0, 0, 0.5)",
    padding: "55px",
    height: 615,
    borderRadius: "60px",
  },
  iconButton: {
    color: theme.palette.white,
    borderRadius: "50%",
  },
  paymentWarningMessage: {
    color: "white",
    fontWeight: 600,
    fontSize: "2.5rem",
    lineHeight: "40px",
    marginLeft: "20px",
  },
  refusedGenerate: {
    width: "100%",
    textAlign: "center",
    color: "white",
    fontWeight: 600,
    fontSize: "1.8rem",
  },
  paymentDataReview: {
    color: "white",
    fontSize: "1.3rem",
    paddingBottom: "40px",
    textAlign: "center",
    width: "80%",
  },
}))(ModalRefusedSubscription);
