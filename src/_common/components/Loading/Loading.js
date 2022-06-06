import React from "react";
import cn from "classnames";

import PropTypes from "prop-types";

// import KeepMounted from "../KeepMounted";
import { withStyles, CircularProgress } from "@material-ui/core";

const styles = {
  loading: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    // height: 300,
  },
  root: {},
};

const Loading = ({
  classes,
  isLoading,
  children,
  sheet,
  className,
  size,
  keepMounted,
  width,
  color,
  ...rest
}) => (
  <>
    {/* {!keepMounted && (
      <> */}
    {isLoading ? (
      <LoadingIndicator
        className={cn(className, classes.loading)}
        size={size}
        classes={{ root: styles.root }}
        style={{ width }}
        color={color}
        {...rest}
      />
    ) : (
      children
    )}
    {/* </>
    )} */}

    {/* {keepMounted && (
      <KeepMounted
        hide={isLoading}
        fallback={
          <LoadingIndicator
            className={cn(className, classes.loading)}
            size={size}
            {...rest}
          />
        }
      >
        {children}
      </KeepMounted>
    )} */}
  </>
);

const LoadingIndicator = ({ className, color, size, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <CircularProgress size={size || 80} color={color} thickness={5} />
    </div>
  );
};

LoadingIndicator.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

Loading.propTypes = {
  /** @ignore */
  classes: PropTypes.object,
  /** @ignore */
  sheet: PropTypes.object,
  /** Indica se o elemento Loader vai ser exibido. */
  isLoading: PropTypes.bool.isRequired,
  /** Conteúdo para ser exibido caso os `isLoading = false`. */
  children: PropTypes.node,
  /** Nome da classe css a ser aplicada no componente. <br />
   *  Se utilizar o `injectsheet`: usar `{classes.nome_da_classe}`
   */
  className: PropTypes.string,
  /** Tamanho do elemento Loader. */
  size: PropTypes.number,
  width: PropTypes.string,
  color: PropTypes.string,
  /** Mantém o componente children montado */
  keepMounted: PropTypes.bool,
};

export default withStyles(() => styles)(Loading);
