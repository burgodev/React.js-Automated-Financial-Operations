import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  Flex,
  Typography,
  Card,
  Button,
  Loading,
} from "../../../../_common/components";
import { ApagarDpsIcon3 } from "../../../../_common/components/Icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
  subscriber: PropTypes.bool,
};

const MonthlyAnalysis = ({ classes, subscriber }) => {
  return (
    <>
      {subscriber ? (
        <ApagarDpsIcon3 style={{ marginTop: 24 }} />
      ) : (
        <Card className={classes.card}>
          <Flex center fullHeight flexDirection="column">
            {typeof subscriber === "undefined" ? (
              <Loading
                size={50}
                style={{ marginTop: 8, width: "20%" }}
                isLoading
              />
            ) : (
              <>
                <Typography className={classes.text}>
                  Começe já a sua automação financeira, realizando a contratação
                  de um dos nossos robôs
                </Typography>
                <Link
                  to="/assinaturas/minhas-assinaturas"
                  className={classes.link}
                >
                  <Button className={classes.button}>Assinaturas</Button>
                </Link>
              </>
            )}
          </Flex>
        </Card>
      )}
    </>
  );
};

export default withStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  card: {
    borderRadius: 14,
    border: "1px solid #CBCBCB",
    background: "#ffffff87",
    width: "80%",
    height: "35%",
    marginTop: 28,
    boxShadow: "5px 5px 15px 5px rgb(0 0 0 / 20%)",
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    width: 823,
    color: theme.palette.primary.main,
  },
  button: {
    marginTop: 20,
    fontSize: "18px",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}))(MonthlyAnalysis);
