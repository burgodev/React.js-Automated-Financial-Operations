import React, { useEffect, useState } from "react";
import { Formik, Form, useFormikContext } from "formik";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { withStyles, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { saveUser } from "../../../../store/user";
import MuiAlert from "@material-ui/lab/Alert";

import { COMPONENTS } from "../../Login";
import {
  Flex,
  Button,
  Loading,
  Typography,
  Snackbar,
} from "../../../../_common/components";

import api from "../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
  changeDisplay: PropTypes.func,
};

const initialValues = { email: "", password: "" };

function validMail(mail) {
  // eslint-disable-next-line no-useless-escape
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    mail
  );
}

const validate = (values) => {
  const errors = {};

  if (!validMail(values.email)) {
    errors.email = "Campo obrigatório *";
    return errors;
  }

  if (!values.password) {
    errors.password = "Campo obrigatório *";
    return errors;
  }

  return errors;
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginForm = ({ classes, changeDisplay }) => {
  const [loading, setLoading] = useState(false);
  const [userIp, setUserIp] = useState("");
  const [userDevice, setUserDevice] = useState("DESKTOP");
  const i18n = useTranslation().t;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "",
    open: false,
  });

  useEffect(() => {
    getDeviceInformation();
  }, []);

  const getDeviceInformation = async () => {
    try {
      const result = await api.get("https://geolocation-db.com/json/");
      setUserIp(result.data.IPv4);
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        setUserDevice("TABLET");
      }
      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        setUserDevice("MOBILE");
      }
      setUserDevice("DESKTOP");
    } catch (error) {}
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const { data } = await api.post(`/auth/login`, {
        ip: userIp,
        device_type: userDevice,
        ...values,
      });

      localStorage.setItem("token", data.payload.token);
      localStorage.setItem("first_time_login", data.payload.first_time_login);
      localStorage.setItem("country_id", data.payload.nationality_id);

      dispatch(saveUser(data));
      window.location.href = "/assinaturas/novas-assinaturas";
      // navigate("/assinaturas/novas-assinaturas");
    } catch (error) {
      setSnackbar({
        message: `${error.response.data.message}`,
        severity: "error",
        open: true,
      });
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
              {i18n("Login.LoginForm.log_in_title")}
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
                className={classes.textfield}
                // fullWidth
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

              <Button
                variant="text"
                className={classes.textButton}
                onClick={() => changeDisplay(COMPONENTS.PASSWORD_RESET)}
              >
                {i18n("Login.LoginForm.bt_forgot_password")}
              </Button>
            </Flex>
            <Flex flexDirection="column">
              <Button
                type="submit"
                className={classes.button}
                disabled={loading}
              >
                {loading ? (
                  <Loading isLoading size={24} color="white" />
                ) : (
                  `${i18n("Login.LoginForm.bt_log_in")}`
                )}
              </Button>

              <Button
                variant="outlined"
                className={classes.button}
                onClick={() => changeDisplay(COMPONENTS.REGISTER)}
                disabled={loading}
              >
                {i18n("Login.LoginForm.bt_register")}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>

      <Flex center margin="18px 0 0">
        <Typography textAlign="center" fontSize={15} width={290}>
          {i18n("Login.LoginForm.need_help")}
          <Typography className={classes.blue}>
            suporte@botmoney.com.br
          </Typography>
        </Typography>
      </Flex>

      <Snackbar data={snackbar} />
    </>
  );
};

export default withStyles((theme) => ({
  typography: {
    color: theme.palette.blue,
    fontSize: 32,
    fontWeight: "700",
  },
  blue: {
    color: theme.palette.blue,
  },
  flex: {
    marginTop: 48,
    marginBottom: 52,
  },
  textButton: {
    fontSize: 15,
    textTransform: "none",
    paddingLeft: 0,
    width: "fit-content",
  },
  button: {
    width: "100%",
    fontSize: 18,
    fontWeight: 600,
    height: 40,
    margin: "8px 0",
  },
  textfield: {
    marginTop: 22,
  },
}))(LoginForm);
