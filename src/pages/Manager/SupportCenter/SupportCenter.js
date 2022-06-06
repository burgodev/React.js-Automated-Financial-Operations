import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, MenuItem, TextField } from "@material-ui/core";

import {
  Flex,
  Typography,
  // TextField,
  Container,
  Divider,
  Card,
  Button,
  Loading,
} from "../../../_common/components";

import { PersonIcon } from "../../../_common/components/Icons";
import api from "../../../services/api";
// import { Details } from "@material-ui/icons";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const statusList = [
  {
    id: 0,
    text: "Repassar",
  },
  {
    id: 1,
    text: "Concluido",
  },
  {
    id: 2,
    text: "Resolvido",
  },
];

const SupportCenter = ({ classes }) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const resp = await api.get("/supportCenter");
      setTimeout(() => setData(resp.data), 1000);
    } catch (e) {}
  };

  return (
    <Container className={classes.container}>
      <Flex alignItems="center">
        <Typography className={classes.pageTitle}>
          Central de Suporte
        </Typography>
        <Typography className={classes.status}>Resolvido</Typography>
        <TextField
          select
          // className={classes.select}
          // variant="filled"
          style={{ marginRight: 16 }}
          id="select-operations-data"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {statusList.map(({ id, text }) => (
            <MenuItem id="menu-item-DDD" key={id} value={id}>
              {text}
            </MenuItem>
          ))}
        </TextField>

        <PersonIcon />
        <Typography style={{ marginLeft: 8 }}>Filipe Burgonovo</Typography>
      </Flex>
      <Flex style={{ marginTop: 28, marginBottom: 8 }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {!data ? (
            <Loading size={40} isLoading style={{ margin: 16 }} />
          ) : (
            <>
              <Typography className={classes.text}>Data</Typography>
              <Typography fontWeight="600" fontSize={14}>
                {data?.details.date}
              </Typography>

              <Typography className={classes.text}>Usuário</Typography>
              <Typography fontWeight="600" fontSize={14}>
                {data?.details.user}
              </Typography>

              <Typography className={classes.text}>Status</Typography>
              <Typography fontWeight="600" fontSize={14}>
                {data?.details.status}
              </Typography>

              <Typography className={classes.text}>Ticket</Typography>
              <Typography fontWeight="600" fontSize={14}>
                {data?.details.ticket}
              </Typography>

              <Typography className={classes.text}>Gestor</Typography>
              <Typography fontWeight="600" fontSize={14}>
                {data?.details.manager}
              </Typography>

              <Typography className={classes.text}>Assunto</Typography>
              <Typography fontWeight="600" fontSize={14}>
                {data?.details.subject}
              </Typography>
            </>
          )}
        </Flex>

        <Flex
          alignItems="center"
          flexDirection="column"
          style={{ margin: "0 32px" }}
        >
          <Divider vertical height={"100%"} />
        </Flex>

        {/* map de cards pro chat aqui*/}
        <Flex flexDirection="column" center width="75%">
          {!data ? (
            <Loading size={80} isLoading style={{ height: 600 }} />
          ) : (
            <>
              <Flex flexDirection="row">
                <PersonIcon />
                <Card
                  style={{
                    marginLeft: 16,
                    padding: "16px 36px",
                    borderRadius: 8,
                    width: "35vw",
                  }}
                >
                  <Typography element="p">
                    Estou integrando a emissão de nota fiscal numa aplicação, e
                    a API me retorna um link html pra impressão. O problema é
                    que quando jogo pra imprimir pela biblioteca react-print,
                    usando o...
                  </Typography>
                </Card>
              </Flex>

              <Flex style={{ marginTop: 24 }}>
                <PersonIcon />
                <Card
                  style={{
                    marginLeft: 16,
                    padding: "24px 36px",
                    borderRadius: 8,
                    width: "35vw",
                  }}
                >
                  <Typography element="p">
                    Estou integrando a emissão de nota fiscal numa aplicação, e
                    a API me retorna um link html pra impressão. O problema é
                    que quando jogo pra imprimir pela biblioteca react-print,
                    usando o...
                  </Typography>
                </Card>
              </Flex>

              <Flex
                style={{ marginTop: 24 }}
                justifyContent="flex-end"
                width="100%"
              >
                <Card
                  style={{
                    marginRight: 16,
                    padding: "24px 36px",
                    borderRadius: 8,
                    width: "35vw",
                    border: "2px solid #05C7F2",
                  }}
                >
                  <Typography element="p">
                    Estou integrando a emissão de nota fiscal numa aplicação, e
                    a API me retorna um link html pra impressão. O problema é
                    que quando jogo pra imprimir pela biblioteca react-print,
                    usando o...
                  </Typography>
                </Card>
                <PersonIcon />
              </Flex>
            </>
          )}
        </Flex>
      </Flex>

      <Flex style={{ marginTop: 56 }}>
        {data && (
          <Card
            style={{
              marginLeft: "11.5vw",
              padding: "16px 36px 12px 16px",
              borderRadius: 8,
              border: "2px solid #CBCBCB",
              height: "20vh",
              width: "50.6vw",
            }}
          >
            <Flex
              height="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <TextField
                multiline
                rows={4}
                placeholder="Como posso te ajudar?"
                style={{ border: "none", textTransform: "none" }}
                // value={value}
                // onChange={handleChange}
              />

              <Flex justifyContent="flex-end">
                <Button width={150} height={40}>
                  Enviar
                </Button>
              </Flex>
            </Flex>
          </Card>
        )}
      </Flex>
    </Container>
  );
};

export default withStyles((theme) => ({
  pageTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginRight: 32,
  },
  container: {
    opacity: 0,
    paddingLeft: 0,
    paddingRight: "3vw",
    animation: `$translate .5s ease-out forwards`,
  },
  "@keyframes translate": {
    to: {
      opacity: 1,
      paddingLeft: "4vw",
    },
  },
  status: {
    background: theme.palette.green,
    width: 122,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: 14,
    color: theme.palette.white,
    marginRight: 16,
  },
  select: {
    marginRight: 16,
    width: 122,
    height: 32,
    // background: `${theme.palette.white} !important`,
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
  },
  text: {
    color: theme.palette.blue,
    fontSize: 14,
    marginTop: 32,
  },
}))(SupportCenter);
