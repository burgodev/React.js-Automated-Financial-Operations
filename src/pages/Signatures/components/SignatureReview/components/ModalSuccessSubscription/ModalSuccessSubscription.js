import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import {
  Flex,
  Typography,
  Button,
  Card,
} from "../../../../../../_common/components";
import handSuccessImg from "../../../../../../assets/modal-subscription-hand.svg";
import paymentSuccessImg from "../../../../../../assets/payment-success.svg";
import { theme } from "../../../../../../_common/utils/theme";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  nextStep: PropTypes.func,
};

const ModalSuccessSubscription = ({ classes, open, nextStep }) => {
  let navigate = useNavigate();
  const i18n = useTranslation().t;

  const handleCloseModal = (btOption) => {
    if (btOption === 1) {
      open = false;
      nextStep(1);
    } else if (btOption === 2) {
      open = false;
      navigate("/assinaturas");
    }
  };

  return (
    <Card className={classes.card}>
      <img width="165" src={handSuccessImg} alt="Hand success subscription" />
      <Flex center>
        <Flex style={{ padding: "15px" }}>
          <img
            src={paymentSuccessImg}
            alt="Wallet payment success"
            width="80"
          />
        </Flex>
        <Typography className={classes.paymentSuccessMsg}>
          {i18n("Modal.Subscription.payment_processed")}
        </Typography>
      </Flex>
      <Typography
        color="white"
        fontSize="1.2rem"
        style={{ paddingBottom: "40px" }}
      >
        {i18n("Modal.Subscription.welcome_automation")}
      </Typography>
      <Button
        width="80%"
        fontSize="1.25rem"
        onClick={() => handleCloseModal(1)}
      >
        {i18n("Modal.Subscription.bt_subscribe_another_one")}
      </Button>
      <Button
        width="80%"
        fontSize="1.25rem"
        background="white"
        color={theme.palette.primary.main}
        onClick={() => handleCloseModal(2)}
      >
        {i18n("Modal.Subscription.bt_follow_up_subscription")}
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
    position: "relative",
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
  paymentSuccessMsg: {
    color: "white",
    fontWeight: 600,
    fontSize: "2.5rem",
    lineHeight: "40px",
  },
}))(ModalSuccessSubscription);
