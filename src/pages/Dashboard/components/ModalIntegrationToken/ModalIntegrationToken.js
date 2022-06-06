import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  withStyles,
} from "@material-ui/core";

import { TokenIcon } from "../../../../_common/components/Icons";

import {
  Flex,
  Typography,
  Button,
  TextField,
  Card,
} from "../../../../_common/components";

PropTypes.propTypes = {
  classes: PropTypes.object,
  onClose: PropTypes.func,
};

const ModalIntegrationToken = ({ classes, onClose }) => {
  const [token, setToken] = useState("");

  return (
    <Card borderRadius={27}>
      <Flex className={classes.flex}>
        <TokenIcon />
        <DialogTitle disableTypography style={{ textAlign: "center" }}>
          <Typography fontWeight="bold" fontSize={28}>
            Token de integração da sua corretora com a plataforma
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography style={{ marginBottom: 16 }}>
              cole o link aqui na plataforma
            </Typography>
            <TextField
              variant="outlined"
              id="textfield-dashboard-link"
              className={classes.textfield}
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose} className={classes.button}>
            Ok
          </Button>
        </DialogActions>
      </Flex>
    </Card>
  );
};

export default withStyles((theme) => ({
  button: {
    width: 282,
    height: 44,
    borderRadius: "6px",
    marginTop: 8,
  },

  flex: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "40px 32px",
  },
  textfield: {
    width: 469,
    height: 55,
  },
}))(ModalIntegrationToken);
