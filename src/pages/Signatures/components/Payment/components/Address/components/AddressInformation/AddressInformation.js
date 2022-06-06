import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useFormikContext } from "formik";

import {
  Flex,
  TextField,
  CepTextField,
} from "../../../../../../../../_common/components";
import api from "../../../../../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
};

const AddressInformation = ({ classes }) => {
  const { values, errors, touched, handleChange } = useFormikContext();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const { data } = await api.get("/countries", {
      params: {
        iso_code: values.address.country_id,
      },
    });
    setCountries(data.payload);
  };

  return (
    <>
      <Flex justifyContent="space-between">
        <TextField
          className={classes.marginTop}
          style={{ width: "47%" }}
          variant="outlined"
          label="País"
          InputLabelProps={{ shrink: true }}
          size="small"
          value={countries.name}
          disabled
        ></TextField>

        <CepTextField />
      </Flex>
      <Flex justifyContent="space-between">
        <TextField
          color={values.bot.color}
          className={classes.marginTop}
          variant="outlined"
          style={{ width: "47%" }}
          id="value"
          name="address.state"
          size="small"
          label="Estado"
          value={values.address?.state}
          onChange={handleChange}
          error={touched.address?.state && Boolean(errors.address?.state)}
          helperText={touched.address?.state && errors.address?.state}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          color={values.bot.color}
          className={classes.marginTop}
          variant="outlined"
          style={{ width: "51%" }}
          id="value"
          name="address.city"
          size="small"
          label="Cidade"
          value={values.address?.city}
          onChange={handleChange}
          error={touched.address?.city && Boolean(errors.address?.city)}
          helperText={touched.address?.city && errors.address?.city}
          InputLabelProps={{ shrink: true }}
        />
      </Flex>
      <TextField
        color={values.bot.color}
        className={classes.marginTop}
        variant="outlined"
        fullWidth
        id="value"
        name="address.street"
        size="small"
        label="Rua"
        value={values.address?.street}
        onChange={handleChange}
        error={touched.address?.street && Boolean(errors.address?.street)}
        helperText={touched.address?.street && errors.address?.street}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        color={values.bot.color}
        className={classes.marginTop}
        variant="outlined"
        fullWidth
        id="value"
        name="address.neighborhood"
        size="small"
        label="Bairro"
        value={values.address?.neighborhood}
        onChange={handleChange}
        error={
          touched.address?.neighborhood && Boolean(errors.address?.neighborhood)
        }
        helperText={
          touched.address?.neighborhood && errors.address?.neighborhood
        }
        InputLabelProps={{ shrink: true }}
      />
      <Flex justifyContent="space-between">
        <TextField
          color={values.bot.color}
          className={classes.marginTop}
          variant="outlined"
          style={{ width: "30%" }}
          id="value"
          name="address.number"
          size="small"
          label="Número"
          value={values.address?.number}
          onChange={handleChange}
          error={touched.address?.number && Boolean(errors.address?.number)}
          helperText={touched.address?.number && errors.address?.number}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          color={values.bot.color}
          className={classes.marginTop}
          variant="outlined"
          style={{ width: "68%" }}
          id="value"
          name="address.complement"
          size="small"
          label="Complemento"
          value={values.address?.complement}
          onChange={handleChange}
          error={
            touched.address?.complement && Boolean(errors.address?.complement)
          }
          helperText={touched.address?.complement && errors.address?.complement}
          InputLabelProps={{ shrink: true }}
        />
      </Flex>
    </>
  );
};

export default withStyles((theme) => ({
  marginTop: {
    marginTop: 6,
    marginBottom: 10,
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
    marginBottom: "5px",
    background: "#FFF",
    borderRadius: 5,
    border: "1px solid grey",
    cursor: "pointer",
    fontSize: "1rem",
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
}))(AddressInformation);
