import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { useFormikContext } from "formik";

import { Typography } from "../../../../../../../_common/components";
import { useTranslation } from "react-i18next";

PropTypes.propTypes = {
  classes: PropTypes.object,
  nextStep: PropTypes.func,
};

const Simulation = ({ classes }) => {
  const { values } = useFormikContext();
  const i18n = useTranslation().t;

  return (
    <>
      <Typography
        textAlign="center"
        fontSize="1.5rem"
        fontWeight={700}
        style={{ margin: "35px 0" }}
      >
        {i18n("Signatures.SignatureReview.simulation_review")}
      </Typography>
    </>
  );
};

export default withStyles((theme) => ({}))(Simulation);
