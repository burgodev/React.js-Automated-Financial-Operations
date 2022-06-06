import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { withStyles, MenuItem, TextField, Snackbar } from "@material-ui/core";
import { Formik, Form } from "formik";
import MuiAlert from "@material-ui/lab/Alert";

import { useDispatch } from "react-redux";
import { saveUser } from "../../../../store/user";
import {
  Button,
  Flex,
  Typography,
  Loading,
  CepTextField,
} from "../../../../_common/components";
import api from "../../../../services/api";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const MyData = ({ classes }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    variant: "",
  });

  const getUser = useCallback(async () => {
    const response = await api.get("/users/profile");
    setUser({ ...response.data.payload });
    dispatch(saveUser(response.data.payload));
  }, [dispatch]);

  const getCountries = async () => {
    const response = await api.get("/countries");
    setCountries(response.data.payload);
  };

  useEffect(() => {
    getUser();
    getCountries();
  }, [getUser]);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const obj = {
        ...values,
        ...values.address[0],
      };

      await api.put(`/users/`, obj);
      dispatch(saveUser(obj));
      setSnackbar({
        message: "Alteração realizada com sucesso",
        variant: "success",
        open: true,
      });
    } catch (error) {
      setSnackbar({ message: error.message, variant: "error", open: true });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ open: false });
  };

  if (!user) return <Loading isLoading className={classes.loading} />;

  return (
    <Formik initialValues={user} onSubmit={handleSubmit} validate={validate}>
      {(bag) => (
        <Form>
          <Typography className={classes.title}>Meus dados</Typography>

          <Flex className={classes.flexWrapper}>
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="name"
              name="name"
              label="Nome completo"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.name}
              onChange={bag.handleChange}
              error={bag.touched.name && Boolean(bag.errors.name)}
              helperText={bag.touched.name && bag.errors.name}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="birthday"
              name="birthday"
              label="Data Nascimento"
              type="date"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.birthday}
              onChange={bag.handleChange}
              error={bag.touched.birthday && Boolean(bag.errors.birthday)}
              helperText={bag.touched.birthday && bag.errors.birthday}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="document"
              name="document"
              label="CPF"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.document}
              onChange={bag.handleChange}
              error={bag.touched.document && Boolean(bag.errors.document)}
              helperText={bag.touched.document && bag.errors.document}
            />
            <TextField
              className={classes.textfield}
              style={{ width: 80 }}
              variant="outlined"
              id="ddi"
              name="ddi"
              label="DDI"
              select
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.ddi}
              onChange={bag.handleChange}
              error={bag.touched.ddi && Boolean(bag.errors.ddi)}
              helperText={bag.touched.ddi && bag.errors.ddi}
            >
              {countries.map((item) => (
                <MenuItem id="menu-item-DDI" key={item.ddi} value={item.ddi}>
                  {item.ddi}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.textfield}
              style={{ width: 420 }}
              variant="outlined"
              id="phone"
              name="phone"
              label="Insira seu número de telefone"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.phone}
              onChange={bag.handleChange}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="country_id"
              name="adress[0].country_id"
              label="País"
              select
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values?.adress[0]?.country_id}
              onChange={bag.handleChange}
              error={bag.touched.country_id && Boolean(bag.errors.country_id)}
              helperText={bag.touched.country_id && bag.errors.country_id}
            >
              {countries.map(({ id, name }) => (
                <MenuItem id="menu-item-DDI" key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
            <CepTextField initialValue={bag.values.adress[0]?.cep} />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="street"
              name="adress[0].street"
              label="Rua"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.adress[0]?.street}
              onChange={bag.handleChange}
              error={bag.touched.street && Boolean(bag.errors.street)}
              helperText={bag.touched.street && bag.errors.street}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="number"
              name="adress[0].number"
              label="Número"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.adress[0]?.number}
              onChange={bag.handleChange}
              error={bag.touched.number && Boolean(bag.errors.number)}
              helperText={bag.touched.number && bag.errors.number}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="neighborhood"
              name="adress[0].neighborhood"
              label="Bairro"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.adress[0]?.neighborhood}
              onChange={bag.handleChange}
              error={
                bag.touched.neighborhood && Boolean(bag.errors.neighborhood)
              }
              helperText={bag.touched.neighborhood && bag.errors.neighborhood}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="complement"
              name="adress[0].complement"
              label="Complemento"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.adress[0]?.complement}
              onChange={bag.handleChange}
              error={bag.touched.complement && Boolean(bag.errors.complement)}
              helperText={bag.touched.complement && bag.errors.complement}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="state"
              name="adress[0].state"
              label="Estado"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.adress[0]?.state}
              onChange={bag.handleChange}
              error={bag.touched.state && Boolean(bag.errors.state)}
              helperText={bag.touched.state && bag.errors.state}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              id="city"
              name="adress[0].city"
              label="Cidade"
              InputLabelProps={{ shrink: true }}
              size="small"
              value={bag.values.adress[0]?.city}
              onChange={bag.handleChange}
              error={bag.touched.city && Boolean(bag.errors.city)}
              helperText={bag.touched.city && bag.errors.city}
            />
          </Flex>
          <Flex className={classes.flexButton}>
            <Button type="submit" borderRadius={5} loading={loading}>
              Salvar
            </Button>
          </Flex>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={snackbar.variant}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Form>
      )}
    </Formik>
  );
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Campo obrigatório *";
    return errors;
  }

  if (!values.document) {
    errors.document = "Campo obrigatório *";
    return errors;
  }

  if (!values.phone) {
    errors.phone = "Campo obrigatório *";
    return errors;
  }

  return errors;
};

export default withStyles((theme) => ({
  flexWrapper: {
    flexWrap: "wrap",
    marginTop: 24,
    width: "80%",
  },
  flexButton: {
    margin: "16px 16px 16px 0px",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
  },
  loading: {
    margin: "100px 0",
  },
  textfield: {
    margin: "6px 8px",
    width: 250,
  },
}))(MyData);
