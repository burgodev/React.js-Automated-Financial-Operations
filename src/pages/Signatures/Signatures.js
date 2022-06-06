import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Link } from "react-router-dom";
import AndroidIcon from "@material-ui/icons/Android";
import ShareIcon from "@material-ui/icons/Share";
// import backgroundImage from "../../assets/backgroundImg.png";
import {
  Container,
  Card,
  Flex,
  Button,
  Divider,
} from "../../_common/components";
// import image from "../../assets/bg1.jpg";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const Signatures = ({ classes }) => {
  return (
    <Container className={classes.container}>
      <Typography className={classes.pageTitle}>Assinaturas</Typography>
      <Divider />
      <Flex
        width="56%"
        alignItems="center"
        justifyContent="space-between"
        style={{ marginTop: "17vh" }}
      >
        <Link className={classes.link} to={"/assinaturas/minhas-assinaturas"}>
          <Button
            className={classes.button}
            variant="icon"
            style={{ fontSize: 44 }}
          >
            <Flex flexDirection="column" center>
              <Typography className={classes.title}>
                Minhas Assinaturas
              </Typography>

              <Card className={classes.card}>
                <Flex center className={classes.flex}>
                  <ListAltIcon fontSize="inherit" color="inherit" />
                </Flex>
              </Card>
            </Flex>
          </Button>
        </Link>
        <Link className={classes.link} to={"/assinaturas/novas-assinaturas"}>
          <Button
            className={classes.button}
            variant="icon"
            style={{ fontSize: 80 }}
          >
            <Flex flexDirection="column" center>
              <Typography className={classes.title} style={{ fontSize: 32 }}>
                Assine um robo
              </Typography>
              <Card
                className={classes.card}
                style={{ width: 260, height: 300 }}
              >
                <Flex center className={classes.flex}>
                  <AndroidIcon fontSize="inherit" color="inherit" />
                </Flex>
              </Card>
            </Flex>
          </Button>
        </Link>

        <Link className={classes.link} to={"/assinaturas/novas-assinaturas"}>
          <Button
            className={classes.button}
            variant="icon"
            style={{ fontSize: 44 }}
          >
            <Flex flexDirection="column" center>
              <Typography className={classes.title}>Integrações</Typography>
              <Card className={classes.card}>
                <Flex center className={classes.flex}>
                  <ShareIcon fontSize="inherit" color="inherit" />
                </Flex>
              </Card>
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default withStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    opacity: 0,
    paddingLeft: 0,
    animation: `$translate .5s ease-out forwards`,

    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },

  "@keyframes translate": {
    to: {
      opacity: 1,
      paddingLeft: "4vw",
      paddingRight: "4vw",
    },
  },
  card: {
    width: 180,
    height: 220,
    boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    margin: "0 32px",
    marginBottom: 18,
    // backgroundImage: `linear-gradient(to right bottom, rgb(255 255 255 / 50%), rgb(255 255 255 / 50%)),url(${backgroundImage})`,
    // backgroundSize: "cover",
    backgroundImage: theme.palette.gradient.image,
  },

  title: {
    fontWeight: "bold",
    fontFamily: "Nunito",
    fontSize: 24,
    marginBottom: 16,
    color: "#727272 !important",
  },

  pageTitle: {
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 16,
  },
  button: {
    textTransform: "none",
    color: "white",
    transition: "500ms",
    borderRadius: "25px",
    fontFamily: "Nunito",
    transform: "scale(.9)",
    "&:hover": {
      // color: theme.palette.primary.main,
      transform: "scale(1)",
    },
  },
  link: {
    textDecoration: "none",
  },
  flex: {
    height: "88%",
    borderRadius: 15,
    border: "solid",
    margin: 16,
  },
}))(Signatures);
