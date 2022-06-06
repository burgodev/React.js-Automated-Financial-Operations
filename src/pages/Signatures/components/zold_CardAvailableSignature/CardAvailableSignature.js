import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import {
  Flex,
  Typography,
  Card,
  Button,
  Divider,
  Loading,
} from "../../../../_common/components";
import api from "../../../../services/api";
import {
  InteligenteFxIcon,
  MasterBotIcon,
  OptimusBotIcon,
  SmartBotIcon,
} from "../../../../_common/components/Icons";
import { theme } from "../../../../_common/utils/theme";
import { BOTS } from "../../../../_common/utils/constants";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const CardAvailableSignature = ({ classes }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
      const resp = await api.get("/availableSubscriptions");
      setTimeout(() => setData(resp.data), 1000);
    } catch (e) {}
  };

  return (
    <>
      <Flex className={classes.flexTitle}>
        <Typography className={classes.title}>
          Assinaturas disponíveis
        </Typography>
      </Flex>

      {!data ? (
        <Loading size={60} style={{ height: "25%" }} isLoading />
      ) : (
        data?.map(
          ({ id, icon, name, recomendation, profitability, price, color }) => (
            <Card key={id} className={classes.card}>
              <Flex className={classes.flex}>
                {/* {icon} */}
                {BOTS.find((item) => item.id === id)?.icon}
                <Flex flexDirection="column">
                  <Typography fontSize={20} fontWeight={600}>
                    {name}
                  </Typography>
                  <Typography fontSize={16} width="200px">
                    Recomendado para investidores {recomendation}
                  </Typography>
                </Flex>
                <Flex flexDirection="column">
                  <Typography fontSize={16}>Rentalidade Aproximada</Typography>
                  <Typography
                    fontSize={28}
                    fontWeight={"bold"}
                    color={BOTS.find((item) => item.id === id)?.color}
                  >
                    {profitability}
                  </Typography>
                </Flex>
                <Divider vertical></Divider>
                <Link
                  to={`/assinaturas/pagamento/${id}`}
                  className={classes.link}
                >
                  <Button
                    height="32px"
                    borderRadius={6}
                    background={BOTS.find((item) => item.id === id)?.color}
                  >
                    Realizar Assinatura
                  </Button>
                </Link>
                <Flex className={classes.highlight}>
                  <Typography className={classes.typography}>R$</Typography>
                  <Typography fontSize={28}>{price}</Typography>
                </Flex>
              </Flex>
            </Card>
          )
        )
      )}
    </>
  );
};

const AVAILABLE_SUBSCRIPTIONS = [
  {
    id: 0,
    name: "Optimus Bot",
    recomendation: "conservadores",
    profitability: "2%",
    price: "69,90",
    icon: <OptimusBotIcon width="77" height="77" />,
    color: theme.palette.purple,
  },
  {
    id: 1,
    name: "Smart Bot",
    recomendation: "moderados",
    profitability: "6%",
    price: "69,90",
    icon: <SmartBotIcon width="77" height="77" />,
    color: theme.palette.red,
  },

  // {
  //   id: 4758,
  //   status: true,
  //   name: "Inteligente FX",
  //   hiringDates: "02/09/2021 02/12/2021",
  //   ordersPlaced: 58,
  //   ordersCompleted: 17,
  //   activeDays: "60 dias",
  //   amountPaid: "R$ 69,90",
  //   profit: "$ 758,00",
  //   drawdown: "4,5%",
  //   amount: "R$ 5.000,00",
  //   totalBalance: "R$ 5.758,00",
  //   profitability: "15,16%",
  //   renovation: "2x",
  //   type: "Demo",
  //   icon: <InteligenteFxIcon width="77" height="77" />,
  //   color: theme.palette.blue,
  // },
  // {
  //   id: 3,
  //   name: "Master Bot",
  //   hiringDates: "02/09/2021 02/12/2021",
  //   ordersPlaced: 58,
  //   ordersCompleted: 17,
  //   activeDays: "60 dias",
  //   amountPaid: "R$ 69,90",
  //   profit: "$ 758,00",
  //   drawdown: "4,5%",
  //   amount: "R$ 5.000,00",
  //   totalBalance: "R$ 5.758,00",
  //   profitability: "15,16%",
  //   renovation: "2x",
  //   type: "Real",
  //   icon: <MasterBotIcon width="77" height="77" />,
  //   color: theme.palette.yellow,
  // },
];

export default withStyles((theme) => ({
  card: {
    borderRadius: 13,
    width: "80%",
    marginBottom: 16,
    padding: "14px 72px 14px 16px",
  },
  flex: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  highlight: {
    borderBottom: "solid 1px #727272",
    alignItems: "center",
    justifyContent: "space-between",
  },
  typography: {
    fontSize: 11,
    marginRight: 4,
    fontWeight: "bold",
  },
  flexTitle: {
    marginBottom: 16,
    // marginTop: 24,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  link: {
    textDecoration: "none",
  },
}))(CardAvailableSignature);
