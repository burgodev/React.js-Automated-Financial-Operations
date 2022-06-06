import React, { useState, useEffect, useCallback } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { withStyles, MenuItem } from "@material-ui/core";

import api from "../../../../services/api";
import { useSnackbar } from "../../../../_common/hooks";

import {
  Flex,
  Typography,
  Card,
  Button,
  TextField,
} from "../../../../_common/components";
import { useTranslation } from "react-i18next";
PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  nextStep: PropTypes.func,
};

const Account = ({ classes, nextStep }) => {
  const { values, errors, touched, handleChange } = useFormikContext();
  const [operationAccounts, setOperationAccounts] = useState([]);
  const [openSnackbar] = useSnackbar();
  const [loading, setLoading] = useState(false);
  const i18n = useTranslation().t;

  const getOperationAccounts = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.post(`/operation-accounts`, {
        integration_token: values.token_integration,
        account_type: values.bot?.simulation ? "DEMO" : "REAL",
      });

      setOperationAccounts(data.payload);
    } catch (error) {
      openSnackbar(error.response?.data?.message, "error");
    } finally {
      setLoading(false);
    }
  }, [values]);

  const verifySubscriptionType = () => {
    values.bot.simulation ? nextStep(4) : nextStep(3);
  };

  useEffect(() => getOperationAccounts(), [getOperationAccounts]);

  return (
    <Flex center flexDirection="column" className={classes.flex}>
      <Typography className={classes.pageTitle}>
        {values.bot?.simulation
          ? i18n("Signatures.Account.simulation_with_robot")
          : i18n("Signatures.Account.subscription_with_robot")}
      </Typography>
      <Card className={classes.card}>
        <Flex center flexDirection="column">
          <Typography className={classes.name}>{values.bot?.name}</Typography>
          {values.bot?.icon}
        </Flex>

        <TextField
          className={classes.broker}
          variant="outlined"
          fullWidth
          select
          id="broker"
          type="broker"
          name="account.broker"
          label={i18n("Signatures.Account.broker_name_label")}
          InputLabelProps={{ shrink: true }}
          size="small"
          value={values.account.broker}
          onChange={handleChange}
          error={touched.account?.broker && Boolean(errors.account?.broker)}
          helperText={touched.account?.broker && errors.account?.broker}
          disabled
        >
          <MenuItem value={"Select Markets"}>Select Markets</MenuItem>
        </TextField>

        <TextField
          className={classes.id}
          color={values.bot?.color}
          variant="outlined"
          fullWidth
          select
          id="id"
          type="id"
          name="account.id"
          label={i18n("Signatures.Account.account_id_label")}
          InputLabelProps={{ shrink: true }}
          size="small"
          value={values.account.id}
          onChange={handleChange}
          disabled={loading && true}
          error={touched.account?.id && Boolean(errors.account?.id)}
          helperText={touched.account?.id && errors.account?.id}
        >
          {operationAccounts.length === 0 ? (
            <MenuItem>Você ainda não tem uma conta de operação</MenuItem>
          ) : (
            operationAccounts.map(({ account_number }) => (
              <MenuItem key={account_number} value={account_number}>
                {account_number}
              </MenuItem>
            ))
          )}
        </TextField>

        <Button
          className={classes.button}
          style={{
            boxShadow: `1px 1px 20px ${values.bot?.color}`,
            background: values.bot?.color,
          }}
          type="submit"
          onClick={verifySubscriptionType}
        >
          {i18n("Buttons.confirm")}
        </Button>
      </Card>
    </Flex>
  );
};

export default withStyles((theme) => ({
  flex: {
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
    width: 440,
    height: 380,
    background: "transparent",
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 28,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 40,
  },
  broker: {
    marginTop: 40,
  },
  id: {
    marginTop: 24,
  },
  button: {
    width: "100%",
    height: 42,
    marginTop: 32,
  },
}))(Account);
