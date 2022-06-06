import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";

import {
  Flex,
  Typography,
  Card,
  Loading,
} from "../../../../_common/components";

PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
};

const Balance = ({ classes, values = null }) => {
  const CARDS = [
    {
      id: 0,
      title: "Saldo Líquido",
      content: values?.netBalance,
    },
    {
      id: 1,
      title: "Saldo Flutuante",
      content: values?.floatingBalance,
    },
    {
      id: 2,
      title: "Exposição Máxima",
      content: values?.maximumExposure,
    },
  ];

  return (
    <>
      <Flex>
        <Typography className={classes.subtitle}>Resumo</Typography>
      </Flex>
      <Flex width="50%" justifyContent="space-between" className={classes.flex}>
        {CARDS.map(({ title, content, id }) => (
          <Card className={classes.card} key={id}>
            <Flex>
              <Typography fontSize={15}>{title}</Typography>
            </Flex>
            <Flex>
              {!values ? (
                <Loading
                  size={30}
                  style={{ marginTop: 8, width: "20%" }}
                  isLoading
                />
              ) : (
                <Typography
                  className={
                    id === 0
                      ? classNames(classes.lightBlue, classes.typography)
                      : classes.typography
                  }
                >
                  R$ {content}
                </Typography>
              )}
            </Flex>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default withStyles((theme) => ({
  subtitle: {
    fontSize: "24px",
    marginTop: 16,
  },

  card: {
    background: theme.palette.white,
    width: 243.78,
    height: 80,
    borderRadius: "14px",
    padding: "12px 20px",
    boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.2)",
    zIndex: 1,
    opacity: 0.8,
  },
  lightBlue: {
    color: theme.palette.primary.main,
  },
  flex: {
    marginTop: 8,
  },
  typography: {
    fontSize: 24,
    fontWeight: "bold",
  },
}))(Balance);
