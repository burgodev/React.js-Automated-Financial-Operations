import React from "react";
import PropTypes from "prop-types";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  withStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SelectLogo from "../../../../_common/components/Icons/SelectLogo";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import {
  Flex,
  Typography,
  Card,
  Button,
  Divider,
  TextField,
} from "../../../../_common/components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useSelector } from "react-redux";

import {
  // axbank,
  freeBotIcon,
  masterBotIcon,
  smartBotIcon,
  optimusTraderIcon,
  inteligenteFxIcon,
} from "../../../../assets/";

PropTypes.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

const ModalTutorial = ({ classes, onClose }) => {
  const [step, setStep] = React.useState(0);
  const user = useSelector((state) => state.user.data);

  return (
    <Card className={classes.card}>
      <DialogTitle disableTypography className={classes.title}>
        <Flex justifyContent="flex-end" width="100%">
          <Button
            variant="icon"
            onClick={() => onClose()}
            className={classes.iconButton}
          >
            <CloseIcon />
          </Button>
        </Flex>
        <Typography fontWeight="bold" color="#FFF" fontSize={30}>
          Botmoney
        </Typography>
      </DialogTitle>
      <DialogContent>
        {step === 0 && (
          <Card clean className={classes.container} height="80%">
            <Typography fontWeight="bold" color="#FFF" fontSize={46}>
              Seja bem-vindo(a)
            </Typography>
            <Typography className={classes.user}>
              {user?.find_user?.email.split("@")[0] || "Usuario"}
            </Typography>

            <Typography color="#FFF" fontSize={20} textAlign="center">
              A seguir algumas instruções para seu primeiro login em nossa
              plataforma.
            </Typography>
          </Card>
        )}

        {/* {step === 1 && (
          <Card clean className={classes.container} height="80%">
            <Flex flexDirection="column">
              <Typography color="#FFF" fontSize={22} textAlign="center">
                1. Para começar você precisa:
              </Typography>
              <Divider className={classes.divider} />
            </Flex>
            <Flex flexDirection="column" center>
              <Typography color="#FFF" fontSize={16} textAlign="center">
                Comprar USDX no AX Bank
              </Typography>
              <Button
                className={classes.buttonAx}
                href="https://www.ax-bank.com/"
                target="_blank"
              >
                <img
                  src={axbank}
                  alt="Logo Botmoney"
                  className={classes.logobot}
                />
              </Button>
              <Typography color="#FFF" fontSize={16} textAlign="center">
                Criar sua conta na Select Markets
              </Typography>
              <Button
                className={classes.button}
                href="https://app.select.io/"
                target="_blank"
              >
                <SelectLogo />
              </Button>
            </Flex>
          </Card>
        )} */}
        {step === 1 && (
          <Card clean className={classes.container} height="100%">
            <Typography color="#FFF" fontSize={20} textAlign="center">
              2. Crie uma conta Botmoney na sua corretora
            </Typography>
            <Divider className={classes.divider} margin="8px 0 40px" />
            <Button
              className={classes.button}
              onClick={() => setStep(step + 1)}
            >
              Vou criar depois
            </Button>

            <Button
              className={classes.button}
              style={{ marginTop: 16 }}
              onClick={() => setStep(step + 1)}
            >
              Já tenho conta
            </Button>

            <Typography className={classes.typography}>
              Não possui conta em nenhuma corretora?
            </Typography>

            <Button
              className={classes.button}
              href="https://app.selectmarkets.global/"
              target="_blank"
            >
              <SelectLogo />
            </Button>
          </Card>
        )}
        {step === 2 && (
          <Card clean className={classes.container} height="100%">
            <div>
              <Typography color="#FFF" fontSize={20} textAlign="center">
                3. Faça a sua integração com a corretora
              </Typography>
              <Divider className={classes.divider} />
              <Flex className={classes.flex}>
                <Typography color="#FFF" fontSize={16} textAlign="center">
                  Na sua corretora encontre o código similar ao de baixo:
                </Typography>
                <TextField
                  value="d63d0e21fdc05f618d55ef306c54af82:13288442151473"
                  disabled
                  fullWidth
                  className={classes.textfield}
                  InputProps={{
                    startAdornment: (
                      <LockOpenIcon className={classes.icon} size="large" />
                    ),
                  }}
                />
              </Flex>
            </div>

            <Button
              className={classes.button}
              onClick={() => setStep(step + 1)}
            >
              Encontrei
            </Button>
          </Card>
        )}
        {step === 3 && (
          <Card clean className={classes.container} height="100%">
            <Flex flexDirection="column">
              <Typography color="#FFF" fontSize={20} textAlign="center">
                4. Você terá que escolher um ou mais robôs para simular ou
                assinar a plataforma
              </Typography>
              <Divider className={classes.divider} margin="8px 0 32px" />
            </Flex>
            <Flex width="90%">
              <img
                src={freeBotIcon}
                alt="Logo Botmoney"
                width="88"
                height="88"
                style={{ transform: "translateX(25px)", zIndex: 3 }}
              />
              <img
                src={inteligenteFxIcon}
                alt="Logo Botmoney"
                width="88"
                height="88"
                style={{ transform: "translateY(35px)", zIndex: 2 }}
              />
              <img
                src={optimusTraderIcon}
                alt="Logo Botmoney"
                width="88"
                height="88"
                style={{ transform: "translateX(-25px)", zIndex: 1 }}
              />
              <img
                src={masterBotIcon}
                alt="Logo Botmoney"
                width="88"
                height="88"
                style={{ transform: "translate(-50px, 35px )" }}
              />
              <img
                src={smartBotIcon}
                alt="Logo Botmoney"
                width="88"
                height="88"
                style={{ transform: "translateX(-72px)", zIndex: 1 }}
              />
            </Flex>

            <Typography className={classes.typography2}>
              Automatizando suas operações, nós cuidamos de obsolutamente tudo
              pra você, de acordo com o seu peril de investidor sendo
              conservador, moderado e arrojado
            </Typography>

            <Button
              className={classes.button}
              onClick={() => setStep(step + 1)}
            >
              Entendi
            </Button>
          </Card>
        )}
        {step === 4 && (
          <Card clean className={classes.container} height="90%">
            <Flex className={classes.flex2}>
              <Typography
                fontWeight="bold"
                color="#FFF"
                fontSize={52}
                textAlign="center"
              >
                Agora sim!
              </Typography>
              <Typography className={classes.typography3}>
                Obrigado por escolher Botmoney.
              </Typography>
            </Flex>
            <Button className={classes.button} onClick={onClose}>
              Começar
            </Button>
          </Card>
        )}
      </DialogContent>
      <DialogActions>
        <Flex className={classes.flex3}>
          {step === 0 && (
            <Button
              onClick={() => setStep(step + 1)}
              className={classes.button}
            >
              Vamos começar
            </Button>
          )}

          {step !== 0 && (
            <Flex>
              <Button
                variant="icon"
                className={classes.iconButton}
                onClick={() => setStep(step - 1)}
              >
                <ArrowBackIcon fontSize="medium" />
              </Button>
              {step !== 4 && (
                <Button
                  variant="icon"
                  className={classes.iconButton}
                  onClick={() => setStep(step + 1)}
                >
                  <ArrowForwardIcon fontSize="medium" />
                </Button>
              )}
            </Flex>
          )}
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
  card: {
    backgroundImage: theme.palette.gradient.image,
    boxShadow: "10px 10px 50px rgba(0, 0, 0, 0.5)",
    padding: "24px 31px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 620,
  },
  iconButton: {
    color: theme.palette.white,
    borderRadius: "50%",
  },
  container: {
    height: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px 24px 16px",
    overflow: "hidden",
  },
  buttonSelect: {
    background: "white",
    border: "2px solid #CBCBCB",
    width: 450,
    borderRadius: 5,
    height: 44,
  },
  lightBlue: { color: theme.palette.lightBlue },
  yellow: { color: theme.palette.yellow },
  red: { color: theme.palette.red },
  button: {
    marginTop: 8,
    width: 380,
    height: 52,
    color: theme.palette.primary.main,
    background: "#F6F6F6",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: 200,
    "&:hover": {
      background: `white`,
      color: "theme.palette.primary.main",
    },
  },

  buttonAx: {
    width: 380,
    height: 52,
    color: theme.palette.primary.main,

    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: 200,
    "&:hover": {
      background: "black",
      color: "theme.palette.primary.main",
    },
    marginTop: 30,
    background: "black",
  },

  user: {
    fontWeight: "bold",
    color: "#FFF",
    fontSiz: 22,
    border: "2px solid #CBCBCB",
    padding: "12px 0px",
    width: "85%",
    textAlign: "center",
    borderRadius: 200,
  },
  divider: {
    border: "1px solid #fff",
    opacity: 0.5,
    margin: "8px 0 24px",
  },

  logoBot: {
    transform: "translateX(25px)",
    zIndex: 3,
  },

  typography: {
    color: theme.palette.white,
    fontSize: 14,
    marginTop: 40,
    textAlign: "center",
  },
  flex: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: 60,
  },
  textfield: {
    marginTop: 4,
    background: "#FFFFFF",
    boxShadow: "10px 10px 13px rgba(0, 0, 0, 0.25)",
    borderRadius: 19,
  },
  icon: {
    fontSize: 32,
    marginRight: 8,
  },
  typography2: {
    element: "p",
    textAlign: "center",
    color: "white",
    fontSize: 14,
    width: "85%",
    marginTop: 64,
  },
  flex2: {
    flexDirection: "column",
    justifyContent: "flex-end",
    height: 160,
  },
  typography3: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 8,
  },
  flex3: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 24px",
    flexDirection: "column",
  },
}))(ModalTutorial);
