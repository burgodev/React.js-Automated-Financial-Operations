import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { Flex } from "../../../../../../../../_common/components";

PropTypes.propTypes = {
  children: PropTypes.object,
};

const SelectMonth = ({ formik, onChange, ...props }) => {
  const { values, errors, touched, handleChange } = useFormikContext();
  const months = [
    { id: 1, name: "01" },
    { id: 2, name: "02" },
    { id: 3, name: "03" },
    { id: 4, name: "04" },
    { id: 5, name: "05" },
    { id: 6, name: "06" },
    { id: 7, name: "07" },
    { id: 8, name: "08" },
    { id: 9, name: "09" },
    { id: 10, name: "10" },
    { id: 11, name: "11" },
    { id: 12, name: "12" },
  ];

  return (
    <TextField
      variant="outlined"
      style={{ width: "38%" }}
      id="expiry_month"
      name="payment.expiry_month"
      label="Mês de vencimento"
      select
      InputLabelProps={{ shrink: true }}
      size="small"
      value={values.payment.expiry_month}
      onChange={handleChange}
      error={
        touched.payment?.expiry_month && Boolean(errors.payment?.expiry_month)
      }
      helperText={touched.payment?.expiry_month && errors.payment?.expiry_month}
      {...props}
    >
      {months.map((month) => (
        <MenuItem value={month.name} key={month.id}>
          {month.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectMonth;
