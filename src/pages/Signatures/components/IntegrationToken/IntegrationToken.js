import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { withStyles, TextField } from "@material-ui/core";

import { SelectLogo } from "../../../../_common/components/Icons";
import {
  Flex,
  Typography,
  Button,
  Card,
  Divider,
} from "../../../../_common/components";
import { theme } from "../../../../_common/utils/theme";
import { useSnackbar } from "../../../../_common/hooks";
import api from "../../../../services/api";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const IntegrationToken = ({ classes, nextStep }) => {
  const { values, touched, errors, handleChange, setFieldValue } =
    useFormikContext();
  const i18n = useTranslation().t;
  const [openSnackbar] = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [checkTokenIntegration, setCheckTokenIntegration] = useState(false);

  useEffect(() => {
    checkTokenIsIntegrated();
  }, []);

  const checkTokenIsIntegrated = async () => {
    try {
      const { data } = await api.get("/brokers/check-broker-account");
      if (data) {
        setFieldValue(
          "token_integration",
          data.payload.external_broker_account_id
        );
        setCheckTokenIntegration(true);
      } else {
        setCheckTokenIntegration(false);
      }
    } catch (error) {}
  };

  const integrateToken = async () => {
    try {
      setLoading(true);
      // await api.post("/brokers/synchronize", {
      //   integration_token: values.token_integration,
      // });
      openSnackbar(
        i18n("Signatures.IntegrationToken.success_validation_snackbar"),
        "success"
      );

      // nextStep(1);
      setCheckTokenIntegration(true);
    } catch (error) {
      openSnackbar(error.response.data.message, "error");
      // nextStep(1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card borderRadius={27} className={classes.card}>
      <Flex className={classes.flex}>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography className={classes.pageTitle}>
            {i18n("Signatures.IntegrationToken.integration_title")}{" "}
            <Typography color={theme.palette.primary.main}>Botmoney</Typography>
          </Typography>

          <Typography className={classes.subtitle}>
            {checkTokenIntegration
              ? i18n("Signatures.IntegrationToken.already_been_integrated")
              : i18n("Signatures.IntegrationToken.paste_code_below")}
          </Typography>

          <TextField
            variant="outlined"
            fullWidth
            id="token_integration"
            // type="token_integration"
            name="token_integration"
            label={i18n("Signatures.IntegrationToken.token_label")}
            InputLabelProps={{ shrink: true }}
            className={classes.textfield}
            size="small"
            value={values.token_integration}
            onChange={handleChange}
            error={
              touched.token_integration && Boolean(errors.token_integration)
            }
            helperText={touched.token_integration && errors.token_integration}
            // disabled={values.token_integration ? true : false}
          />

          <Button
            style={{ marginTop: errors.token_integration ? 20 : null }}
            onClick={checkTokenIntegration ? () => nextStep(1) : integrateToken}
            className={classes.button}
            loading={loading}
          >
            {checkTokenIntegration
              ? i18n("Signatures.IntegrationToken.bt_next")
              : i18n("Signatures.IntegrationToken.bt_submit")}
          </Button>
        </Flex>

        <Divider margin="40px 0 20px" width={450} />
        <Typography className={classes.typography}>
          {i18n("Signatures.IntegrationToken.dont_have_broker_account")}
        </Typography>
        <Button className={classes.buttonSelect}>
          <SelectLogo />
        </Button>
      </Flex>
    </Card>
  );
};

export default withStyles((theme) => ({
  button: {
    width: 450,
    height: 44,
    borderRadius: "6px",
    marginTop: 8,
  },
  buttonSelect: {
    background: "white",
    border: "2px solid #CBCBCB",
    width: 450,
    borderRadius: 5,
    height: 44,
  },
  flex: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "24px 32px",
  },
  textfield: {
    width: 450,
    height: 55,
  },
  card: {
    height: "80vh",
    background: "transparent",
    width: "max-content",
    margin: "auto",

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
    fontSize: 28,
    marginTop: 8,
    marginBottom: 84,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 12,
    marginBottom: 8,
  },
  typography: {
    fontSize: 15,
    marginBottom: 8,
  },
}))(IntegrationToken);
