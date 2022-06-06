import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useFormikContext } from "formik";

import { TextField } from "../../../../../../_common/components";
import TextMaskCpfCnpj from "../../../../../../_common/masks/TextMaskCpfCnpj";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  nextStep: PropTypes.func,
};

const Boleto = ({ classes, nextStep }) => {
  const { values, errors, touched, handleChange } = useFormikContext();
  const i18n = useTranslation().t;

  return (
    <>
      <TextField
        color={values.bot.color}
        className={classes.marginTop}
        variant="outlined"
        fullWidth
        id="value"
        name="payment.name"
        size="small"
        label={i18n("Signatures.Payment.BankSlip.full_name")}
        value={values.payment.name}
        onChange={handleChange}
        error={touched.payment?.name && Boolean(errors.payment?.name)}
        helperText={touched.payment?.name && errors.payment?.name}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        color={values.bot.color}
        className={classes.marginTop}
        variant="outlined"
        fullWidth
        id="value"
        name="payment.cpf"
        size="small"
        label={i18n("Signatures.Payment.BankSlip.document_number")}
        value={values.payment.cpf}
        onChange={handleChange}
        error={touched.payment?.cpf && Boolean(errors.payment?.cpf)}
        helperText={touched.payment?.cpf && errors.payment?.cpf}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          inputComponent: TextMaskCpfCnpj,
        }}
      />
    </>
  );
};

export default withStyles((theme) => ({
  marginTop: {
    marginTop: 16,
  },
}))(Boleto);
