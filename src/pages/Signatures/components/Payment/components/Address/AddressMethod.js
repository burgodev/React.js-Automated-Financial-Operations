import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import { useFormikContext } from "formik";

import { Flex, Typography, Card } from "../../../../../../_common/components";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Button } from "../../../../../../_common/components";
import AddressInformation from "./components/AddressInformation/AddressInformation";
import api from "../../../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  nextStep: PropTypes.func,
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};

const AddressMethod = ({ classes, collapsed, setCollapsed }) => {
  const { values, setValues } = useFormikContext();
  // const [collapsed, setCollapsed] = useState(false);
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [isSelectedAddress, setIsSelectedAddress] = useState(false);
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    getAddresses();
  }, []);

  const getAddresses = async () => {
    try {
      const { data } = await api.get("addresses");
      setAddressData(data.payload);
    } catch (error) {}
  };

  const handleNewAddress = (newAddress) => {
    setValues({
      ...values,
      address: {
        country_id: values.address.country_id,
        cep: "",
        state: "",
        city: "",
        street: "",
        neighborhood: "",
        number: "",
        complement: "",
      },
    });
    setIsNewAddress(newAddress);
  };

  const handleSelectedAddress = (address) => {
    setValues({
      ...values,
      address: {
        id: address.id,
        country_id: values.address.country_id,
        cep: address.cep,
        state: address.state,
        city: address.city,
        street: address.street,
        neighborhood: address.neighborhood,
        number: address.number,
        complement: address.complement,
      },
    });
    setIsSelectedAddress(true);
    setCollapsed(false);
  };

  return (
    <>
      <Flex center style={{ padding: "20px" }}>
        <Typography className={classes.pageTitle}>
          Endereço de cobrança
        </Typography>
      </Flex>
      <Flex justifyContent="space-between">
        <Card
          height={45}
          className={`${classes.card} ${classes.collapseCard}`}
          onClick={() => setCollapsed(!collapsed)}
          style={{ border: collapsed && "1px solid #727272", width: "85%" }}
        >
          {addressData.length === 0
            ? "Você ainda não tem um endereço cadastrado"
            : "Selecione um endereço ou adicione"}
          {collapsed ? (
            <ExpandLess
              className={addressData.length === 0 && classes.displayNone}
            />
          ) : (
            <ExpandMore
              className={addressData.length === 0 && classes.displayNone}
            />
          )}
        </Card>
        <Button
          width={10}
          height={45}
          className={classes.btNewAddress}
          onClick={() => handleNewAddress(true)}
        >
          +
        </Button>
      </Flex>

      <Collapse in={collapsed}>
        {addressData.length > 0 &&
          addressData.map((address) => (
            <Card className={classes.card} key={address.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="paymentMethod"
                    color="primary"
                    onChange={() => handleSelectedAddress(address)}
                    checked={values.address?.id === address.id}
                  />
                }
                label={`${address.street} ${address.number}, ${address.neighborhood}, ${address.city} - ${address.state}`}
              />
            </Card>
          ))}
      </Collapse>
      {isNewAddress || isSelectedAddress ? <AddressInformation /> : ""}
    </>
  );
};

export default withStyles((theme) => ({
  displayNone: {
    display: "none",
  },
  marginTop: {
    marginTop: 16,
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 28,
  },
  collapseCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.3rem",
    fontWeight: 600,
  },
  card: {
    width: "auto",
    padding: "8px 16px",
    marginBottom: "15px",
    background: "#FFF",
    borderRadius: 5,
    border: "1px solid grey",
    cursor: "pointer",
    fontSize: "1.1rem",
  },
  btNewAddress: {
    borderRadius: 5,
    fontSize: "1.7rem",
    background: "#525252",
    "&:hover": {
      background: "#525252",
      opacity: "0.9",
    },
  },
}))(AddressMethod);
