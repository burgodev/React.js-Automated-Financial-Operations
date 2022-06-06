import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { MenuItem, TextField, withStyles } from "@material-ui/core";

import {
  Flex,
  Typography,
  Card,
  Divider,
  Button,
  Container,
} from "../../../../_common/components";
import { BOTS } from "../../../../_common/utils/constants";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const Cycles = [
  {
    name: "monthly",
    label: "cycle_type_monthly",
  },
  {
    name: "semiannually",
    label: "cycle_type_semiannually",
  },
  {
    name: "yearly",
    label: "cycle_type_yearly",
  },
];

const Bots = ({ classes, nextStep }) => {
  const { values, setFieldValue, handleChange, errors, touched } =
    useFormikContext();
  const i18n = useTranslation().t;
  const [botes, setBotes] = useState([]);
  const [cycle, setCycle] = useState("monthly");

  useEffect(() => {
    checkPlanCycle(cycle);
  }, [cycle]);

  const checkPlanCycle = (cycle) => {
    if (cycle === "monthly") {
      setBotes(BOTS.filter(({ plan_cycle }) => plan_cycle.monthly === true));
    } else if (cycle === "semiannually") {
      setBotes(
        BOTS.filter(({ plan_cycle }) => plan_cycle.semiannually === true)
      );
    } else if (cycle === "yearly") {
      setBotes(BOTS.filter(({ plan_cycle }) => plan_cycle.yearly === true));
    }
  };

  return (
    <Container className={classes.container}>
      <Flex center flexDirection="column">
        <Typography className={classes.pageTitle}>
          {i18n("Signatures.Bots.bots_title")}
        </Typography>
        <Flex center>
          <Typography element="p" width={590}>
            {i18n("Signatures.Bots.bots_subtitle")}
            <span className={classes.blue}>
              {i18n("InvestorType.conservative")}
            </span>
            ,
            <span className={classes.yellow}>
              {i18n("InvestorType.moderate")}
            </span>{" "}
            {i18n("Signatures.Bots.and")}
            <span className={classes.red}>{i18n("InvestorType.dashing")}</span>.
          </Typography>
        </Flex>
      </Flex>
      <Flex center>
        <TextField
          variant="outlined"
          style={{ width: "20%", margin: "20px 0 0 0" }}
          select
          id="planCycle"
          type="planCycle"
          name="planCycle"
          label={i18n("Signatures.Bots.plan_cycle")}
          InputLabelProps={{ shrink: true }}
          size="small"
          value={values.planCycle}
          onChange={(e) => setCycle(e.target.value)}
          error={touched.planCycle && Boolean(errors.planCycle)}
          helperText={touched.planCycle && errors.planCycle}
          defaultValue={cycle}
        >
          {Cycles.map(({ name, label }) => (
            <MenuItem key={name} value={name}>
              {i18n(`Signatures.Bots.${label}`)}
            </MenuItem>
          ))}
        </TextField>
      </Flex>
      <Flex center className={classes.flex}>
        {/* {BOTS.filter(({ is_promo }) => is_promo === true).map((bot) => ( */}
        {botes.map((bot) => (
          <div>
            <Card key={bot.id} className={classes.card}>
              <Flex
                flexDirection="column"
                center
                className={classes.translateY}
              >
                {bot.icon}
                <Typography className={classes.name}>{bot.name}</Typography>
                <Typography textAlign="center" width={200}>
                  {i18n("Signatures.Bots.recommended_for_inverstor")}{" "}
                  {bot.recomendation}
                </Typography>
                <Divider width="80%" margin="12px 0 18px 0" />
                <Typography textAlign="center">
                  {i18n("Signatures.Bots.return_close_to")}
                </Typography>
                <Typography color={bot.color} margin="14px 0" fontSize={32}>
                  {bot.profitability}
                </Typography>
                <Typography fontWeight="bold" fontSize={24}>
                  {bot.plan_cycle.monthly && cycle === "monthly"
                    ? `${bot.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}/m`
                    : bot.plan_cycle.semiannually && cycle === "semiannually"
                    ? `${(bot.price * 6).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}`
                    : bot.plan_cycle.yearly && cycle === "yearly"
                    ? `${(bot.price * 12).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}/a`
                    : ""}
                </Typography>
                {/* <Typography style={{ display: "none" }}>{bot.price}</Typography> */}
              </Flex>
            </Card>
            <Flex center flexDirection="column">
              <Button
                background={bot.color}
                width={174}
                height={42}
                style={{ boxShadow: `1px 1px 20px ${bot.color}` }}
                onClick={() => {
                  setFieldValue("bot", {
                    ...bot,
                    simulation: false,
                    price:
                      cycle === "yearly"
                        ? bot.price * 12
                        : cycle === "semiannually"
                        ? bot.price * 6
                        : cycle === "monthly"
                        ? bot.price
                        : null,
                    cycle: cycle,
                  });
                  nextStep();
                }}
              >
                {i18n("Signatures.Bots.bt_choose")}
              </Button>
              <Button
                size="small"
                variant="text"
                className={classes.buttonSimulate}
                style={{
                  color: bot.color,
                }}
                onClick={() => {
                  setFieldValue("bot", {
                    ...bot,
                    simulation: true,
                    cycle: cycle,
                  });
                  nextStep();
                }}
              >
                {i18n("Signatures.Bots.bt_simulate")}
              </Button>
            </Flex>
          </div>
        ))}
      </Flex>
    </Container>
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
    width: 240,
    height: 350,
    boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    margin: "0 16px",
    marginBottom: 18,
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 8,
  },
  buttonSimulate: {
    background: "transparent",
    marginTop: 6,
    fontSize: 18,
    width: 174,
    height: 42,
  },
  flex: { marginTop: 64 },
  translateY: {
    transform: "translateY(-42px)",
  },
  name: {
    margin: "24px 0",
    fontWeight: "bold",
    fontSize: 24,
  },
  blue: { color: theme.palette.blue },
  yellow: { color: theme.palette.yellow },
  red: { color: theme.palette.red },
}))(Bots);
