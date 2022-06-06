import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  withStyles,
} from "@material-ui/core";

import ModalSimulationConfetti from "../../../../../../assets/modal-simulation-confetti.gif";
import { theme } from "../../../../../../_common/utils/theme";
import {
  Flex,
  Typography,
  Card,
  Button,
} from "../../../../../../_common/components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
};

const ModalSuccessSimulation = ({ classes, nextStep }) => {
  const navigate = useNavigate();
  const i18n = useTranslation().t;

  const handleGoToSubscriptions = () => {
    navigate("/assinaturas");
  };

  const handleGoToSimulation = () => {
    nextStep(1);
  };

  return (
    <Card className={classes.card}>
      <DialogTitle disableTypography className={classes.title}>
        <img
          src={ModalSimulationConfetti}
          alt="Birth hat with confetti as success message"
          width={200}
        />
      </DialogTitle>
      <DialogContent>
        <Flex className={classes.flex3}>
          <Typography className={classes.contentMainText}>
            {i18n("Modal.Simulation.simulation_completed")}
          </Typography>
          <Typography
            width="70%"
            fontSize="1.3rem"
            color="white"
            textAlign="center"
          >
            {i18n("Modal.Simulation.follow_up_simulation")}
          </Typography>
        </Flex>
      </DialogContent>
      <DialogActions>
        <Flex className={classes.flex3}>
          <Button
            onClick={handleGoToSimulation}
            variant="outlined"
            className={classes.btNewSimulation}
          >
            {i18n("Modal.Simulation.bt_new_simulation")}
          </Button>
          <Button
            height={60}
            width="80%"
            background="#FFF"
            color={theme.palette.primary.main}
            fontSize="1.4rem"
            onClick={handleGoToSubscriptions}
          >
            {i18n("Modal.Simulation.bt_go_to_subscriptions")}
          </Button>
        </Flex>
      </DialogActions>
    </Card>
  );
};

export default withStyles((theme) => ({
  title: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  contentMainText: {
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: 700,
    color: "white",
    lineHeight: "57px",
  },
  card: {
    background: theme.palette.gradient.default,
    boxShadow: "10px 10px 50px rgba(0, 0, 0, 0.5)",
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 620,
  },

  btNewSimulation: {
    border: "1px solid white",
    color: "white",
    width: "80%",
    height: 60,
    marginBottom: 8,
    fontSize: "1.4rem",
    "&:hover": {
      background: `unset`,
      opacity: "0.9",
    },
  },
  flex3: {
    width: "100%",
    alignItems: "center",
    padding: "0 18px",
    flexDirection: "column",
  },
}))(ModalSuccessSimulation);
