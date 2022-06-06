import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";

import {
  Flex,
  Typography,
  Card,
  Loading,
} from "../../../../_common/components";
import {
  InteligenteFxIcon,
  MasterBotIcon,
  OptimusBotIcon,
  SmartBotIcon,
} from "../../../../_common/components/Icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.array,
};

const Signatures = ({ values = null, classes }) => {
  const [animation, setAnimation] = useState({ class: {}, id: -1 });

  const data = values?.map((item, i) => ({
    ...item,
    icon: SIGNATURES[i].icon,
    color: SIGNATURES[i].color,
  }));

  return (
    <>
      <Flex>
        <Typography className={classes.title}>Minhas assinaturas</Typography>
      </Flex>
      {!values && (
        <Flex width="15%" style={{ marginTop: 40 }}>
          <Loading size={60} isLoading />
        </Flex>
      )}
      <Flex
        width="min-content"
        justifyContent="space-between"
        className={classes.flex}
      >
        {data?.map(({ title, profit, percentage, id, icon, color }) => (
          <Flex flexDirection="column" key={id}>
            <Card
              clean
              key={id}
              className={classNames(
                animation.id === id ? animation.class : classes.icon
              )}
              onClick={() => {
                setAnimation({ class: classes.shrink, id: id });
              }}
            >
              {!values ? (
                <Loading size={60} style={{ marginTop: 32 }} isLoading />
              ) : (
                <>
                  <Typography fontSize="22px" italic>
                    {title}
                  </Typography>
                  {icon}
                </>
              )}
            </Card>
            <Card
              className={classes.card}
              style={{
                opacity: animation.id === id ? 1 : 0,
                border: `solid 2px ${color}`,
                // backgroundImage: `linear-gradient(to right bottom, rgb(255 255 255 / 10%), ${color})`,
              }}
              onClick={() => {
                setAnimation({ class: null, id: -1 });
              }}
            >
              <Flex justifyContent="space-between">
                <Typography fontWeight="bold" fontSize={18} width="75%">
                  {title}
                </Typography>
                <Flex flexDirection="column">
                  <Typography fontSize={15} textAlign="right" opacity=".75">
                    {id}
                  </Typography>
                  <Typography fontSize={11} textAlign="right" opacity=".75">
                    ID conta
                  </Typography>
                </Flex>
              </Flex>
              <Flex justifyContent="flex-end">
                <Flex flexDirection="column">
                  <Typography fontSize={15} className={classes.profit}>
                    {profit}
                  </Typography>
                  <Typography
                    fontSize={10}
                    textAlign="right"
                    opacity=".75"
                    className={classes.porcentage}
                  >
                    {percentage}
                  </Typography>
                </Flex>
              </Flex>
            </Card>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

const SIGNATURES_STYLE = { marginTop: 8 };

const SIGNATURES = [
  {
    id: 8965,
    icon: <InteligenteFxIcon style={SIGNATURES_STYLE} />,
    color: "rgb(5 199 242 / 50%)",
  },
  {
    id: 9632,
    icon: <MasterBotIcon style={SIGNATURES_STYLE} />,
    color: "rgb(255 169 0 / 50%)",
  },
  {
    id: 3619,
    icon: <OptimusBotIcon style={SIGNATURES_STYLE} />,
    color: "rgb(151 70 255 / 50%)",
  },
  {
    id: 7682,
    icon: <SmartBotIcon style={SIGNATURES_STYLE} />,
    color: "rgb(255 82 81 / 50%)",
  },
];

export default withStyles((theme) => ({
  icon: {
    marginRight: 80,
    textAlign: "center",
    zIndex: 1,
    cursor: "pointer",
    opacity: 0.5,
    transition: "all 0.5s ease-out",
    "&:hover": {
      opacity: 1,
      transform: "scale(1.05)",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 18,
  },
  profit: {
    marginTop: 5,
  },
  porcentage: {
    marginTop: 2,
  },
  flex: {
    marginTop: 8,
  },

  card: {
    paddingLeft: 8,
    marginTop: 24,
    marginRight: 24,
    cursor: "pointer",
    width: 204,
    height: 142,
    background: "#f0f0f0",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: 36,
    transform: "translate(17px, -166px)",
    zIndex: 0,
    padding: "52px 16px 16px",
    transition: "all .3s ease-out",
    border: "solid 1px",
  },

  shrink: {
    marginRight: 80,
    textAlign: "center",
    zIndex: 1,
    cursor: "pointer",
    transition: "all 0.5s ease-out",

    opacity: 1,
    transform: "scale(0.6) translateY(-75px) translateX(80px)",
  },
}))(Signatures);
