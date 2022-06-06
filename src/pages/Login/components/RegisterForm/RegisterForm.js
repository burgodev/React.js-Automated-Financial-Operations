import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";

import { withStyles, TextField, MenuItem, Checkbox } from "@material-ui/core";
import {
  Flex,
  Button,
  Loading,
  Typography,
} from "../../../../_common/components";
import api from "../../../../services/api";
import { COMPONENTS } from "../../Login";
import { useSnackbar } from "../../../../_common/hooks";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  changeDisplay: PropTypes.func,
};

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  nationalityId: "",
  confirmation: false,
};

function validMail(mail) {
  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    mail
  );
}

const validate = (values) => {
  const errors = {};

  if (!validMail(values.email)) {
    errors.email = "E-mail inválido";
    return errors;
  }

  if (!values.email) {
    errors.email = "Campo obrigatório *";
    return errors;
  }

  if (!values.password) {
    errors.password = "Campo obrigatório *";
    return errors;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Campo obrigatório *";
    return errors;
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Senhas diferentes";
    return errors;
  }

  if (!values.nationalityId) {
    errors.nationalityId = "Campo obrigatório *";
    return errors;
  }

  if (!values.confirmation) {
    errors.confirmation = "Campo obrigatório *";
    return errors;
  }

  return errors;
};

const RegisterForm = ({ classes, changeDisplay }) => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [openSnackbar] = useSnackbar();
  const i18n = useTranslation().t;

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const response = await api.get("/countries");
      setCountries(response.data.payload);
    } catch (error) {}
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      const obj = {
        ...values,
        confirm_password: values.confirmPassword,
        nationality_id: values.nationalityId,
      };

      await api.post(`/users`, obj);

      openSnackbar(
        i18n("RegisterForm.success_created_account_snackbar"),
        "success"
      );
      changeDisplay(COMPONENTS.LOGIN);
    } catch (error) {
      openSnackbar(error.response.data.message, "error");
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
              {i18n("RegisterForm.register_title")}
            </Typography>
            <Flex flexDirection="column" className={classes.flex}>
              <TextField
                variant="outlined"
                // fullWidth
                id="email"
                name="email"
                label={i18n("Login.LoginForm.email_label")}
                // type="email"
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.email}
                onChange={bag.handleChange}
                error={bag.touched.email && Boolean(bag.errors.email)}
                helperText={bag.touched.email && bag.errors.email}
              />
              <TextField
                variant="outlined"
                className={classes.marginTop12}
                id="password"
                type="password"
                name="password"
                label={i18n("Login.LoginForm.password_label")}
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.password}
                onChange={bag.handleChange}
                error={bag.touched.password && Boolean(bag.errors.password)}
                helperText={bag.touched.password && bag.errors.password}
              />

              <TextField
                variant="outlined"
                className={classes.marginTop12}
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                label={i18n("RegisterForm.confirm_password_label")}
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.confirmPassword}
                onChange={bag.handleChange}
                error={
                  bag.touched.confirmPassword &&
                  Boolean(bag.errors.confirmPassword)
                }
                helperText={
                  bag.touched.confirmPassword && bag.errors.confirmPassword
                }
              />

              <TextField
                variant="outlined"
                className={classes.marginTop12}
                select
                id="nationalityId"
                type="nationalityId"
                name="nationalityId"
                label={i18n("RegisterForm.region_nationality_label")}
                InputLabelProps={{ shrink: true }}
                size="small"
                value={bag.values.nationalityId}
                onChange={bag.handleChange}
                error={
                  bag.touched.nationalityId && Boolean(bag.errors.nationalityId)
                }
                helperText={
                  bag.touched.nationalityId && bag.errors.nationalityId
                }
              >
                {countries.map(({ iso_code, name }) => (
                  <MenuItem key={iso_code} value={iso_code}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>

              <Typography fontSize={12} margin="4px 0 0">
                {i18n("RegisterForm.region_advise")}
              </Typography>
            </Flex>
            <Flex className={classes.marginTop12}>
              <Checkbox
                size="small"
                checked={bag.values.confirmation}
                name="confirmation"
                value={bag.values.confirmation}
                onChange={bag.handleChange}
                error={
                  bag.touched.confirmation && Boolean(bag.errors.confirmation)
                }
                helperText={bag.touched.confirmation && bag.errors.confirmation}
              />

              <Typography for="scales" fontSize={14}>
                {i18n("RegisterForm.check_privacy_police")}
              </Typography>
            </Flex>
            {bag.errors.confirmation && (
              <Flex>
                <Typography className={classes.typography2}>
                  {i18n("Validation.required_field")}
                </Typography>
              </Flex>
            )}

            <Flex flexDirection="column">
              <Button
                variant="contained"
                type="submit"
                className={classes.button}
                disabled={loading}
              >
                {loading ? (
                  <Loading isLoading size={24} color="white" />
                ) : (
                  i18n("RegisterForm.create_account")
                )}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>

      <Flex center className={classes.marginTop12}>
        <Typography className={classes.typography3}>
          {i18n("RegisterForm.already_have_account")}
        </Typography>
        <Button
          variant="text"
          className={classes.textButton}
          width="none"
          disabled={loading}
          onClick={() => changeDisplay(COMPONENTS.LOGIN)}
        >
          {i18n("RegisterForm.bt_log_in")}
        </Button>
      </Flex>
    </>
  );
};

export default withStyles((theme) => ({
  container: {
    margin: "auto",
  },
  card: {
    width: 450,
    zIndex: 1,
    borderRadius: 20,
    padding: "28px 32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  img: {
    transform: "translateY(-41px)",
    zIndex: 0,
    position: "fixed",
    top: "20%",
    left: "29%",
  },
  typography: {
    color: theme.palette.blue,
    fontSize: 32,
    fontWeight: "700",
  },
  blue: {
    color: theme.palette.blue,
  },
  flex: {
    pading: 12,
    marginTop: 32,
  },
  marginTop12: {
    marginTop: 12,
  },
  button: {
    width: "100%",
    fontSize: 18,
    fontWeight: 600,
    height: 40,
    marginTop: 32,
  },
  typography2: {
    fontSize: 14,
    marginTop: 4,
    color: "#f44336 ",
  },
  textButton: {
    fontSize: 16,
    fontWeight: 600,
  },
  typography3: {
    textAlign: "center",
    fontWeight: "bold",
  },
}))(RegisterForm);
