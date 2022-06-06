import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {
  Flex,
  Typography,
  Button,
  Card,
} from "../../../../../../_common/components";
import subscriptionRefusedImg from "../../../../../../assets/modal-subscription-refused.svg";
import api from "../../../../../../services/api";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  nextStep: PropTypes.func,
  subscriptionId: PropTypes.string,
};

const ModalCancelSubscription = ({ classes, subscriptionId }) => {
  const i18n = useTranslation().t;
  const handleCloseModal = () => {
    window.location.href = "/assinaturas";
  };

  const handleCancelSignature = async () => {
    try {
      await api.post("/subscriptions/cancel", {
        subscription_id: subscriptionId,
        is_active: false,
        is_simulation: false,
      });
      window.location.reload();
    } catch (error) {}
  };

  return (
    <Card className={classes.card}>
      <CloseIcon
        className={classes.closeIcon}
        onClick={() => handleCloseModal()}
      />
      <img
        width="165"
        src={subscriptionRefusedImg}
        alt="Alert subscription failed"
      />
      <Flex center>
        <Typography className={classes.title}>
          {i18n("Modal.CancelSubscription.really_want_to_cancel")}
        </Typography>
      </Flex>
      <Typography className={classes.paymentDataReview}>
        {i18n("Modal.CancelSubscription.you_didnt_completed_cycle")}
      </Typography>
      <Button
        width="80%"
        height="60px"
        fontSize="1.40rem"
        onClick={handleCancelSignature}
        // background="white"
        // color={theme.palette.primary.main}
      >
        {i18n("Modal.CancelSubscription.bt_yes_i_agree")}
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
    // background: theme.palette.gradient.default,
    boxShadow: "10px 10px 50px rgba(0, 0, 0, 0.5)",
    padding: "55px",
    height: 615,
    borderRadius: "25px",
  },
  closeIcon: {
    position: "absolute",
    right: "30px",
    top: "30px",
    cursor: "pointer",
  },
  iconButton: {
    color: theme.palette.white,
    borderRadius: "50%",
  },
  title: {
    // color: "white",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: "40px",
    textAlign: "center",
  },
  paymentDataReview: {
    // color: "white",
    fontSize: "1.2rem",
    paddingBottom: "40px",
    textAlign: "center",
    width: "80%",
  },
}))(ModalCancelSubscription);
