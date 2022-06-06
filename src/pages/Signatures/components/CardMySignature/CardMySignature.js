import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";
import moment from "moment";

import {
  Flex,
  Typography,
  Card,
  Button,
  Divider,
  Container,
  Loading,
} from "../../../../_common/components";
import api from "../../../../services/api";
import { CancelIcon, ConfirmIcon } from "../../../../_common/components/Icons";
// import { theme } from "../../../../_common/utils/theme";
import { BOTS } from "../../../../_common/utils/constants";
import CancelSubscription from "./components/CancelSubscription";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const CardMySignature = ({ classes }) => {
  const [data, setData] = useState([]);
  const [, /* openModal */ setOpenModal] = useState(false);
  const [subscriptionCancelType, setSubscriptionCancelType] = useState("");
  const [subscriptionId, setSubscriptionId] = useState("");
  const [open, setOpen] = useState(false);
  const i18n = useTranslation().t;

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
      const resp = await api.get("/subscriptions");
      setData(resp.data.payload);
    } catch (e) {}
  };

  const handleCancelSubscription = (subscription_id, is_simulation) => {
    if (is_simulation) {
      setSubscriptionCancelType("SIMULATION");
      setSubscriptionId(subscription_id);
      setOpen(true);
    } else if (!is_simulation) {
      setSubscriptionCancelType("SIGNATURE");
      setSubscriptionId(subscription_id);
      setOpen(true);
    }
  };

  return (
    <Container className={classes.container}>
      <CancelSubscription
        subscriptionType={subscriptionCancelType}
        subscriptionId={subscriptionId}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Flex className={classes.flexTitle}>
        <Typography className={classes.title}>
          {i18n("CardMySignature.subtitle")}
        </Typography>
      </Flex>
      {data.length <= 0 ? (
        <Typography>
          {i18n("CardMySignature.no_subscription_available")}
        </Typography>
      ) : (
        <>
          <Grid container>
            <Grid item xs={2} />
            <Grid item xs={2} className={classes.textCenter}>
              <Typography>{i18n("CardMySignature.hiring_date")}</Typography>
            </Grid>
            <Grid item xs={1} className={classes.textCenter}>
              <Typography>
                {i18n("CardMySignature.orders_performed")}
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.textCenter}>
              <Typography>
                {i18n("CardMySignature.robot_active_days")}
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.textCenter}>
              <Typography>{i18n("CardMySignature.initial_balance")}</Typography>
            </Grid>
            <Grid item xs={1} className={classes.textCenter}>
              <Typography>{i18n("CardMySignature.profitability")}</Typography>
            </Grid>
            <Grid item xs={1} className={classes.textCenter}>
              <Typography>{i18n("CardMySignature.profit")}</Typography>
            </Grid>
            <Grid item xs={2} className={classes.textCenter}>
              <Typography>{i18n("CardMySignature.subscription")}</Typography>
            </Grid>
          </Grid>
          {typeof data === "undefined" ? (
            <Loading size={60} className={classes.loading} isLoading />
          ) : (
            data.map((item) => {
              return (
                <Card key={item.trader_robot_id} className={classes.card}>
                  <Grid container>
                    <Grid
                      item
                      xs={1}
                      className={`${classes.grid} ${classes.gridIcon}`}
                    >
                      {
                        BOTS.find(
                          ({ id_robot }) => item.trader_robot_id === id_robot
                        ).icon
                      }
                    </Grid>

                    <Grid item xs={1}>
                      <Flex flexDirection="column">
                        <Typography fontSize={18} fontWeight={600} italic>
                          {item.trader_robot_name}
                        </Typography>
                        <Typography
                          fontSize={16}
                          fontWeight={600}
                          style={{
                            color: BOTS.find(
                              ({ id_robot }) =>
                                item.trader_robot_id === id_robot
                            ).color,
                          }}
                        >
                          {item.is_active === null
                            ? i18n("CardMySignature.waiting_payment")
                            : item.is_active === false
                            ? i18n("CardMySignature.disabled")
                            : item.is_active === true
                            ? i18n("CardMySignature.active")
                            : ""}
                        </Typography>
                      </Flex>
                    </Grid>

                    <Grid item xs={2} className={classes.grid}>
                      <Typography>
                        {moment(item.created_at).format(
                          `${i18n("CardMySignature.date_format")}`
                        )}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.grid}>
                      <Typography>{item.ordersPlaced}</Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.grid}>
                      <Typography>{item.activeDays}</Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.grid}>
                      <Typography>{item.initial_balance}</Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.grid}>
                      <Typography>{item.profitability}</Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.grid}>
                      <Typography>{item.profit}</Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.gridPrice}>
                      <Typography fontWeight={700} fontSize="1.1rem">
                        {!item.is_simulation
                          ? `${item.subscription_plan_price.toLocaleString(
                              "pt-BR",
                              {
                                style: "currency",
                                currency: "BRL",
                              }
                            )}`
                          : "R$ 0,00"}
                      </Typography>
                      <Typography fontSize="0.8rem">
                        {" "}
                        {item.payment_card_id
                          ? i18n("CardMySignature.payment_type_cc")
                          : item.is_simulation
                          ? i18n("CardMySignature.free_version")
                          : i18n("CardMySignature.payment_type_bank_slip")}
                      </Typography>
                    </Grid>

                    <Divider margin={"4px 0 8px"} />

                    <Grid item xs={1}>
                      <Card className={classes.card2}>
                        <Typography
                          fontSize={16}
                          fontWeight={600}
                          color="white"
                        >
                          {item.is_simulation
                            ? i18n("CardMySignature.simulation")
                            : i18n("CardMySignature.subscription")}
                        </Typography>
                      </Card>
                    </Grid>

                    <Grid item xs={1}>
                      <Typography fontSize={16} fontWeight={600}>
                        {i18n("CardMySignature.account_id")}{" "}
                        {item.broker_operation_account_number}
                      </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.grid}>
                      <Typography
                        className={classes.typography}
                        style={{
                          color: BOTS.find(
                            ({ id_robot }) => item.trader_robot_id === id_robot
                          ).color,
                        }}
                      >
                        {i18n("CardMySignature.amount")}
                      </Typography>
                      <Typography fontWeight={600}>{item.amount}</Typography>
                    </Grid>

                    <Grid item xs={2} className={classes.grid}>
                      <Typography
                        className={classes.typography}
                        style={{
                          color: BOTS.find(
                            ({ id_robot }) => item.trader_robot_id === id_robot
                          ).color,
                        }}
                      >
                        {i18n("CardMySignature.profits")}
                      </Typography>
                      <Typography fontWeight={600}>{item.profit}</Typography>
                    </Grid>

                    <Grid item xs={2} className={classes.grid}>
                      <Typography
                        className={classes.typography}
                        style={{
                          color: BOTS.find(
                            ({ id_robot }) => item.trader_robot_id === id_robot
                          ).color,
                        }}
                      >
                        {i18n("CardMySignature.total_balance")}
                      </Typography>

                      <Typography fontWeight={600}>
                        R$ {item.broker_operation_account_balance}
                      </Typography>
                    </Grid>

                    <Grid item xs={1} />

                    <Grid item xs={3} className={classes.grid}>
                      <Button
                        variant="text"
                        className={classes.button}
                        onClick={() => setOpenModal(true)}
                        disabled={!item.is_active}
                      >
                        <ConfirmIcon className={classes.icon} />
                        {i18n("CardMySignature.bt_renew_subscription")}
                      </Button>

                      <Button
                        onClick={() =>
                          handleCancelSubscription(item.id, item.is_simulation)
                        }
                        variant="text"
                        className={classes.buttonCancel}
                        disabled={
                          item.payment_card_id === null ||
                          item.is_active === false
                        }
                      >
                        <CancelIcon className={classes.icon} />
                        {item.is_simulation
                          ? i18n("CardMySignature.bt_cancel_simulation")
                          : i18n("CardMySignature.bt_cancel_subscription")}
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              );
            })
          )}
        </>
      )}
    </Container>
  );
};

export default withStyles((theme) => ({
  container: {
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "8px",
      cursor: "pointer",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
  card: {
    borderRadius: 13,
    marginBottom: 16,
    padding: "12px 0px",
  },
  title: {
    width: 245,
    fontWeight: "bold",
    fontSize: 24,
  },
  typography: {
    marginRight: 16,
    fontWeight: 600,
  },
  button: {
    color: theme.palette.green,
    textTransform: "none",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "12px",
  },
  buttonCancel: {
    color: theme.palette.red,
    textTransform: "none",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "12px",
    marginLeft: 16,
  },
  icon: {
    marginRight: 4,
    height: 16,
    width: 16,
  },
  card2: {
    width: 105,
    height: 28,
    background: "#68A64B",
    borderRadius: "0px 10px 10px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridPrice: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
    marginBottom: 4,
  },
  flexTitle: {
    alignItems: "center",
    margin: "16px 0 24px",
  },
  loading: {
    height: "60%",
  },
  gridIcon: {
    paddingRight: 16,
  },
}))(CardMySignature);
