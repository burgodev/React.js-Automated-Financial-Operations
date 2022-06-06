import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { withStyles } from "@material-ui/core";

const styles = {
  root: {
    display: ({ inline }) => (inline ? "inline-flex" : "flex"),
    // flexWrap: "wrap",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  fullHeight: {
    height: "100%",
  },
};

const Flex = ({
  flexDirection,
  width,
  height,
  margin,
  alignItems,
  justifyContent,
  center,
  fullHeight,
  children,
  className,
  style,
  classes,
  sheet,
  inline,
  ...rest
}) => (
  <div
    style={{
      justifyContent,
      alignItems,
      width,
      height,
      flexDirection,
      margin,
      ...style,
    }}
    {...rest}
    className={cn(
      classes.root,
      { [classes.center]: center === true },
      { [classes.fullHeight]: fullHeight === true },
      className
    )}
  >
    {children}
  </div>
);

Flex.propTypes = {
  /** Componentes a serem renderizados */
  children: PropTypes.node,
  /** [`flex-direction`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-3) define a direção na qual os itens serão renderizados. */
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  /** [`align-items`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7) define o alinhamento horizontal dos items. */
  alignItems: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "column",
    "center",
    "baseline",
    "stretch",
  ]),
  /** [`justify-content`](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6) define o alinhamento vertical dos items. */
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
    "center",
  ]),
  /** Define o width do componente. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Centraliza o conteudo horizontalmente e verticalmente. <br />
   * Obs.: Se utilizar esta propriedade, não é necessário utilizar `alignItems` e `justifyContent`.
   * */
  center: PropTypes.bool,
  fullHeight: PropTypes.bool,
  /** @ignore */
  classes: PropTypes.object,
  /**
   * Nome da classe css a ser aplicada no componente. <br />
   * Se utilizar o `injectsheet`: usar `{classes.nome_da_classe}`
   */
  className: PropTypes.string,
  /** @ignore */
  sheet: PropTypes.object,
  /** @ignore */
  style: PropTypes.object,
  /** Se verdadeiro, utiliza `display:inline-flex` ao invés de `display:flex` */
  inline: PropTypes.bool,
};

Flex.defaultProps = {
  center: false,
  fullHeight: false,
  sheet: null,
  // width: "100%",
};

export default withStyles(styles)(Flex);
