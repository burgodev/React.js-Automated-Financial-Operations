import React, { useState } from "react";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { withStyles, TextField } from "@material-ui/core";
// import { useDispatch } from "react-redux";
// import { saveUser } from "../../../../store/user";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useParams } from "react-router-dom";

import {
  Flex,
  Button,
  Loading,
  Typography,
  Container,
  Card,
} from "../../../../_common/components";
import LoginImg from "../../../../assets/LoginImg2.png";

import api from "../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
  showLogin: PropTypes.func,
  showPasswordReset: PropTypes.func,
};

const initialValues = { password: "", confirmPassword: "" };

const validate = (values) => {
  const errors = {};

  if (!values.password.length) {
    errors.password = "Campo obrigatório *";
    return errors;
  }

  if (!values.confirmPassword.length) {
    errors.confirmPassword = "Campo obrigatório *";
    return errors;
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "As senhas precisam ser iguais";
    return errors;
  }

  return errors;
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ChangePassword = ({ classes }) => {
  let { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = React.useState(false);
  let navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenErrorSnackbar(false);
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);

      await api.post(`/auth/password-recovery`, {
        password: values.password,
        password_confirm: values.confirmPassword,
        token: token,
      });

      navigate("/");
    } catch (error) {
      setOpenErrorSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <Flex>
            <img alt="login background" src={LoginImg} height={560} />
            <Card className={classes.formCard}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={validate}
              >
                {(bag) => (
                  <Form>
                    <Typography className={classes.typography}>
                      Altere a sua senha
                    </Typography>
                    <Typography element="p" margin="0 0 24px 0">
                      Your new password must be diferent from previous used
                      passwords.
                    </Typography>

                    <TextField
                      variant="outlined"
                      fullWidth
                      id="password"
                      name="password"
                      type="password"
                      label="Senha"
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      value={bag.values.password}
                      onChange={bag.handleChange}
                      error={
                        bag.touched.password && Boolean(bag.errors.password)
                      }
                      helperText={bag.touched.password && bag.errors.password}
                    />

                    <TextField
                      variant="outlined"
                      type="password"
                      fullWidth
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirmar senha"
                      InputLabelProps={{ shrink: true }}
                      size="small"
                      value={bag.values.confirmPassword}
                      onChange={bag.handleChange}
                      error={
                        bag.touched.confirmPassword &&
                        Boolean(bag.errors.confirmPassword)
                      }
                      helperText={
                        bag.touched.confirmPassword &&
                        bag.errors.confirmPassword
                      }
                      className={classes.textfield}
                    />

                    <Flex flexDirection="column">
                      <Button
                        type="submit"
                        className={classes.button}
                        disabled={loading}
                      >
                        {loading ? (
                          <Loading isLoading size={24} color="white" />
                        ) : (
                          "Alterar"
                        )}
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
            </Card>
          </Flex>
        </Card>
      </Container>
    </>
  );
};

export default withStyles((theme) => ({
  container: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    paddingLeft: "0",
    paddingRight: "4vw",
    animation: theme.animations.translatePageContainer.animation,
  },
  formCard: {
    width: 450,
    zIndex: 1,
    borderRadius: 20,
    padding: "28px 40px",
    height: 540,
  },
  card: {
    borderRadius: 16,
  },
  typography: {
    color: theme.palette.blue,
    fontSize: 32,
    fontWeight: "700",
  },
  button: {
    width: "100%",
    fontSize: 18,
    fontWeight: 600,
    height: 40,
    margin: "8px 0",
  },
  textfield: {
    marginTop: 16,
    marginBottom: 32,
  },
  [theme.animations.translatePageContainer.keyframeName]:
    theme.animations.translatePageContainer.keyframeValue,
}))(ChangePassword);
