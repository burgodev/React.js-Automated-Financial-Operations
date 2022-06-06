import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";

PropTypes.propTypes = {
  children: PropTypes.object,
};

const SelectYear = ({ formik, onChange, ...props }) => {
  const { values, errors, touched, handleChange } = useFormikContext();
  const years = [
    { id: 1, name: "2022" },
    { id: 2, name: "2023" },
    { id: 3, name: "2024" },
    { id: 4, name: "2025" },
  ];

  return (
    <TextField
      variant="outlined"
      style={{ width: "38%" }}
      id="expiry_year"
      name="payment.expiry_year"
      label="Ano de vencimento"
      select
      InputLabelProps={{ shrink: true }}
      size="small"
      value={values.payment.expiry_year}
      onChange={handleChange}
      error={
        touched.payment?.expiry_year && Boolean(errors.payment?.expiry_year)
      }
      helperText={touched.payment?.expiry_year && errors.payment?.expiry_year}
      {...props}
    >
      {years.map((year) => (
        <MenuItem value={year.name} key={year.id}>
          {year.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectYear;
