import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

import {
  Button,
  Flex,
  Typography,
  Loading,
} from "../../../../_common/components";
import {
  MedalIcon,
  RocketIcon,
  DeveloperIcon,
} from "../../../../_common/components/Icons";
import avatar from "../../../../assets/user.jpg";

PropTypes.propTypes = {
  classes: PropTypes.object,
};

const MyProfile = ({ classes }) => {
  const user = useSelector((state) => state.user.data);
  const [image, setImage] = useState("");

  return (
    <>
      <Typography fontSize={32} fontWeight="bold">
        Meu perfil
      </Typography>
      <Flex className={classes.flexWrapper}>
        <Avatar alt="Profile image" src={avatar} className={classes.avatar} />
        <Flex>
          <Flex className={classes.flex}>
            <Typography fontSize={18} fontWeight="bold">
              {/* {user?.name} */}

              {!!user ? (
                user?.name
              ) : (
                <Loading size={30} isLoading className={classes.loading} />
              )}
            </Typography>

            <input
              accept="image/*"
              // className={classes.input}
              id="contained-button-file"
              type="file"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="text"
                className={classes.button}
                component="span"
              >
                Alterar foto de perfil
              </Button>
            </label>
          </Flex>
        </Flex>

        <Flex flexDirection="column">
          <Flex>
            <MedalIcon />
            <Flex className={classes.flex}>
              <Typography fontSize={18}>Investidor</Typography>
              <Typography fontSize={22} fontWeight="bold">
                {!!user ? (
                  user?.level
                ) : (
                  <Loading size={20} isLoading className={classes.loading} />
                )}
              </Typography>
            </Flex>
          </Flex>
          <Button variant="text" className={classes.button}>
            Alterar informações
          </Button>
        </Flex>
        <Flex>
          <RocketIcon />
          <Flex className={classes.flex}>
            <Typography fontSize={18}>Meta</Typography>
            <Typography fontSize={22} fontWeight="bold">
              {!!user ? (
                user?.goal
              ) : (
                <Loading size={20} isLoading className={classes.loading} />
              )}
            </Typography>
          </Flex>
        </Flex>
        <Flex>
          <DeveloperIcon />

          <Flex className={classes.flex}>
            <Typography fontSize={18}>Profissão</Typography>
            <Typography fontSize={22} fontWeight="bold">
              {!!user ? (
                user?.profession
              ) : (
                <Loading size={20} isLoading className={classes.loading} />
              )}
            </Typography>
          </Flex>
        </Flex>
        <Flex>
          <DeveloperIcon color="#373839" />

          <Flex className={classes.flex}>
            <Typography fontSize={18}>Meu gestor</Typography>
            <Typography fontSize={22} fontWeight="bold">
              {!!user ? (
                user?.manager
              ) : (
                <Loading size={20} isLoading className={classes.loading} />
              )}
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default withStyles((theme) => ({
  avatar: {
    width: 90,
    height: 90,
    // background: "#05C7F2",
    borderRadius: 17,
  },
  button: {
    textTransform: "none",
    fontSize: 13,
    padding: 0,
    margin: 0,
    alignItems: "inherit",
    justifyContent: "inherit",
  },
  flex: {
    marginLeft: 16,
    marginRight: 40,
    flexDirection: "column",
  },
  flexWrapper: {
    marginTop: 16,
  },
  loading: {
    margin: "8px 0",
  },
}))(MyProfile);
