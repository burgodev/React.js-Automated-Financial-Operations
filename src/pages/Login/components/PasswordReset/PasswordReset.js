import React, { useState } from "react";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { withStyles, TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import {
  Flex,
  Button,
  Loading,
  Typography,
} from "../../../../_common/components";
import { COMPONENTS } from "../../Login";
import api from "../../../../services/api";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  changeDisplay: PropTypes.func,
};

const initialValues = { email: "" };

function validMail(mail) {
  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    mail
  );
}

const validate = (values) => {
  const errors = {};

  if (!values.email.length) {
    errors.email = "Campo obrigatório *";
    return errors;
  }

  if (!validMail(values.email)) {
    errors.email = "E-mail inválido";
    return errors;
  }

  return errors;
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PasswordReset = ({ classes, changeDisplay }) => {
  const [loading, setLoading] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = React.useState(false);
  const i18n = useTranslation().t;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenErrorSnackbar(false);
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { data } = await api.post(
        `/auth/request-password-recovery`,
        values
      );

      changeDisplay(COMPONENTS.CHECK_EMAIL);
    } catch (error) {
      setOpenErrorSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {(bag) => (
          <Form>
            <Typography className={classes.typography}>
              {i18n("Login.PasswordReset.password_reset_title")}
            </Typography>
            <Typography element="p" margin="0 0 24px 0">
              {i18n("Login.PasswordReset.password_reset_subtitle")}
            </Typography>

            <TextField
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              label={i18n("Login.LoginForm.email_label")}
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.email}
              onChange={bag.handleChange}
              error={bag.touched.email && Boolean(bag.errors.email)}
              helperText={bag.touched.email && bag.errors.email}
            />

            <Flex flexDirection="column" margin="8px 0 0 0">
              <Button
                type="submit"
                className={classes.button}
                disabled={loading}
              >
                {loading ? (
                  <Loading isLoading size={24} color="white" />
                ) : (
                  `${i18n("Login.PasswordReset.bt_send")}`
                )}
              </Button>

              <Button
                disabled={loading}
                variant="text"
                onClick={() => changeDisplay(COMPONENTS.LOGIN)}
              >
                {i18n("Login.PasswordReset.bt_back")}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>

      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Ocorreu um erro.
        </Alert>
      </Snackbar>
    </>
  );
};

export default withStyles((theme) => ({
  typography: {
    color: theme.palette.blue,
    fontSize: 32,
    fontWeight: "700",
  },
  flex: {
    marginTop: 48,
    marginBottom: 52,
  },
  button: {
    width: "100%",
    fontSize: 18,
    fontWeight: 600,
    height: 40,
    margin: "8px 0",
  },
}))(PasswordReset);
