import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import { Flex, Typography } from "../../..";
import { ApagarDpsIcon } from "../../../Icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const CurrencyOperations = ({ classes }) => {
  return (
    <>
      <Flex alignItems="center" className={classes.title}>
        <Typography fontWeight="bold" fontSize={20}>
          Operação por moeda
        </Typography>
      </Flex>
      <Flex className={classes.icon}>
        <ApagarDpsIcon />
      </Flex>

      <Flex className={classes.flex}>
        <Typography fontSize={11}>EUR/USD</Typography>
        <Typography fontSize={11}>CAD/CHF</Typography>
      </Flex>
      <Flex className={classes.flex}>
        <Typography fontSize={11}>AUD/JPY</Typography>
        <Typography fontSize={11}>AUD/CHF</Typography>
      </Flex>
      <Flex className={classes.flex}>
        <Typography fontSize={11}>NZD/USD</Typography>
        <Typography fontSize={11}>GBP/USD</Typography>
      </Flex>
    </>
  );
};

export default withStyles((theme) => ({
  title: {
    marginTop: 32,
  },
  icon: {
    marginTop: 24,
    marginBottom: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    width: "85%",
  },
}))(CurrencyOperations);
