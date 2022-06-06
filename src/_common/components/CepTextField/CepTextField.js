import React, { useEffect, useState, useCallback } from "react";
import { useFormikContext } from "formik";
import PropTypes from "prop-types";
import { withStyles, TextField, FormHelperText } from "@material-ui/core";
import axios from "axios";

import { useDebouncedState } from "../../hooks";
import TextMaskCep from "../../masks/TextMaskCep";
import { Loading, Flex } from "../";

const initialValues = {
  street: "",
  ddd: "",
  neighborhood: "",
  complement: "",
  state: "",
  city: "",
  cep: "",
};

const CepTextfield = ({ classes, initialValue }) => {
  const [debouncedFilter, setValue, value] = useDebouncedState(initialValue);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { values, setValues } = useFormikContext();

  useEffect(() => {
    const getCep = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${debouncedFilter}/json/`
        );

        if (data.erro) throw new Error();
        const obj = {
          street: data.logradouro,
          ddd: data.ddd,
          neighborhood: data.bairro,
          complement: data.complemento,
          state: data.uf,
          city: data.localidade,
          cep: data.cep,
        };
        setData(obj);
        setError(false);
      } catch (e) {
        setError(true);
        setData(initialValues);
      } finally {
        setLoading(false);
      }
    };

    if (debouncedFilter?.length) getCep();
  }, [debouncedFilter]);

  const callback = useCallback(() => {
    setValues({
      ...values,
      address: {
        ...data,
        country_id: localStorage.getItem("country_id"),
        number: values?.address[0]?.number,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    callback();
  }, [data, callback]);

  return (
    <Flex flexDirection="column" className={classes.flex}>
      <TextField
        variant="outlined"
        id="textfield-cep"
        label="CEP"
        InputLabelProps={{ shrink: true }}
        size="small"
        value={values.address.cep === "" ? value : values.address.cep}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          inputComponent: TextMaskCep,
          endAdornment: (
            <Loading size={18} isLoading={loading} style={{ width: "auto" }} />
          ),
        }}
      />
      {error && (
        <FormHelperText id="textfield-cep" className={classes.error}>
          CEP inválido
        </FormHelperText>
      )}
    </Flex>
  );
};

CepTextfield.propTypes = {
  classes: PropTypes.object,
  initialValue: PropTypes.string,
};

export default withStyles((theme) => ({
  flex: {
    margin: "6px 0px",
    width: 245,
  },
  error: {
    color: theme.palette.errorMessage,
  },
}))(CepTextfield);
