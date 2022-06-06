import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { withStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import {
  Stepper,
  Flex,
  Container,
  Divider,
  Button,
} from "../../../_common/components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Bots,
  IntegrationToken,
  Payment,
  Account,
  SignatureReview,
  ModalTutorial,
} from "../components";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const NewSignature = ({ classes }) => {
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(4);
  const [openTutorial, setOpenTutorial] = React.useState(true);
  const [loading, setLoading] = useState(false);
  const first_time_login = localStorage.getItem("first_time_login");

  const nextStep = (step) => {
    setActiveStep(step ? step : activeStep + 1);
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // alert("submit");

      // api.post(`/user`, payload, {
      //   headers: { "Content-Type": "application/json" },
      // });
    } catch (error) {
    } finally {
      if (activeStep < 4) {
        if (activeStep === 0) {
          setTimeout(() => nextStep(), 1200);
        } else {
          values.bot?.simulation ? nextStep(4) : nextStep();
        }
      } else alert(JSON.stringify(values));
      setTimeout(() => setLoading(false), 1200);
    }
  };

  return (
    <Container className={classes.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => validate(values, activeStep)}
      >
        {({ values }) => (
          <Form>
            <Flex flexDirection="column">
              <Stepper
                steps={STEPS}
                activeStep={activeStep}
                color={values.bot?.color}
              />
              <Divider />
              <Flex style={{ height: 32, marginTop: 16 }} alignItems="center">
                <Button
                  variant="icon"
                  className={classes.iconButton}
                  onClick={() =>
                    activeStep === 0
                      ? navigate("/assinaturas")
                      : setActiveStep(
                          activeStep === 4 && values.bot.simulation
                            ? activeStep - 2
                            : activeStep - 1
                        )
                  }
                >
                  <ArrowBackIcon fontSize="large" />
                </Button>
              </Flex>
              {first_time_login === "true" && (
                <ModalTutorial
                  open={openTutorial}
                  onClose={() => setOpenTutorial(false)}
                />
              )}

              {activeStep === 0 && (
                <IntegrationToken loading={loading} nextStep={nextStep} />
              )}
              {activeStep === 1 && <Bots nextStep={nextStep} />}
              {activeStep === 2 && <Account nextStep={nextStep} />}
              {activeStep === 3 && <Payment nextStep={nextStep} />}
              {activeStep === 4 && <SignatureReview nextStep={nextStep} />}
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const initialValues = {
  token: "",
  bot: null,
  account: {
    broker: "Select Markets",
    id: "",
  },
  address: {
    country_id: localStorage.getItem("country_id"),
    id: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    neighborhood: "",
    number: "",
    complement: "",
  },
  paymentMethod: "",
  payment: {
    cardNumber: "",
    expiry_month: "",
    expiry_year: "",
    cvv: "",
    name: "",
    cpf: "",
    phone: "",
  },
};

const validate = (values, activeStep) => {
  let errors = {};

  if (activeStep === 0 && !values.token) {
    errors.token = "Campo obrigatório *";
    return errors;
  }

  if (activeStep === 2 && !values.account.id) {
    errors.account = {
      id: "Campo obrigatório *",
    };
    return errors;
  }

  if (activeStep === 3 && values.paymentType === "CREDIT_CARD") {
    if (values.payment.cardNumber.length < 16) {
      errors.payment = {
        ...errors.payment,
        cardNumber: "Este campo deve conter 16 digitos",
      };
      return errors;
    }
    if (!values.payment.cardNumber) {
      errors.payment = {
        ...errors.payment,
        cardNumber: "Campo obrigatório *",
      };
      return errors;
    }

    if (!values.payment.expiry_month) {
      errors.payment = {
        ...errors.payment,
        expiry_month: "Campo obrigatório *",
      };
      return errors;
    }
    if (!values.payment.expiry_year) {
      errors.payment = {
        ...errors.payment,
        expiry_year: "Campo obrigatório *",
      };
      return errors;
    }
    if (!values.payment.cvv) {
      errors.payment = {
        ...errors.payment,
        cvv: "Campo obrigatório *",
      };
      return errors;
    }
    if (!values.payment.name) {
      errors.payment = {
        ...errors.payment,
        name: "Campo obrigatório *",
      };
      return errors;
    }
    if (!values.payment.cpf) {
      errors.payment = {
        ...errors.payment,
        cpf: "Campo obrigatório *",
      };
      return errors;
    }
  }

  if (activeStep === 3 && values.paymentType === "BOLETO") {
    if (!values.payment.name) {
      errors.payment = {
        ...errors.payment,
        name: "Campo obrigatório *",
      };
      return errors;
    }
    if (!values.payment.cpf) {
      errors.payment = {
        ...errors.payment,
        cpf: "Campo obrigatório *",
      };
      return errors;
    }
  }

  return errors;
};

const STEPS = [
  {
    id: 0,
    label: "broker_integration",
  },
  {
    id: 1,
    label: "choose_your_robot",
  },
  {
    id: 2,
    label: "choose_your_account",
  },
  {
    id: 3,
    label: "payment_method",
  },
  {
    id: 4,
    label: "review_and_confirm",
  },
];

export default withStyles((theme) => ({
  container: {
    opacity: 0,
    paddingLeft: 0,
    marginTop: 55,
    animation: `$translate .5s ease-out forwards`,
  },

  "@keyframes translate": {
    to: {
      opacity: 1,
      paddingLeft: "4vw",
      paddingRight: "4vw",
    },
  },

  card: {
    opacity: 0,
    paddingLeft: 0,
    animation: `$translate .5s ease-out forwards`,
    overflow: "hidden",
    width: 240,
    height: 362,
    boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    margin: "0 16px",
  },

  blue: {
    color: theme.palette.blue,
  },
  yellow: {
    color: theme.palette.yellow,
  },
  red: {
    color: theme.palette.red,
  },
  iconButton: {
    color: theme.palette.text.primary,
    borderRadius: "50%",
  },
}))(NewSignature);
