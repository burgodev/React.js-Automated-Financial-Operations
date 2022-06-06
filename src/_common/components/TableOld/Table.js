import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import { Typography, Loading, Flex } from "../";

PropTypes.propTypes = {
  classes: PropTypes.object,
  link: PropTypes.string,
  color: PropTypes.string,
  transparent: PropTypes.bool,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
  initialValues: PropTypes.array.isRequired,
};

const Table = ({
  headers = [],
  color = "#FFFFFF",
  initialValues = [],
  loading,
  classes,
  transparent,
  link,
}) => {
  const [data, setData] = useState(initialValues);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const arr = initialValues.filter((item) => {
      delete item.id;
      return item;
    });
    setTotalPages(5);
    setData(arr);
  }, [initialValues]);

  return (
    <Flex flexDirection="column" width="100%">
      <MuiTable className={classes.table}>
        <TableHead>
          <TableRow className={classes.head}>
            {headers.map(({ id, text, style }) => (
              <TableCell
                align="center"
                key={id}
                className={classes.tableHeader}
                style={{
                  borderBottom: transparent ? "24px solid #f7f7f7" : null,
                  backgroundColor: color,
                  ...style,
                }}
              >
                <Typography fontSize="0.95rem" fontWeight={600}>
                  {text}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <>
            {loading && (
              <TableRow>
                <TableCell align="center" colSpan={headers.length + 1}>
                  <Loading isLoading style={{ margin: "32px 0" }} />
                </TableCell>
              </TableRow>
            )}

            {!loading &&
              data.map((item) => (
                <TableRow key={item.id} className={classes.tableRow}>
                  {Object.keys(item).map((text) => (
                    <TableCell
                      key={text}
                      className={`${classes.tableCellRadiusLeft} ${classes.tableBorderBottom}`}
                      style={{
                        borderBottom: transparent ? "8px solid #f7f7f7" : null,
                        backgroundColor: color,
                      }}
                      align="center"
                    >
                      {!!link?.length ? (
                        <Link to={link} className={classes.link}>
                          <Typography
                            // criar classes
                            style={{
                              color:
                                text === "profit" || text === "type"
                                  ? "#2CDA00"
                                  : null,
                              border:
                                text === "type" ? "1px solid #2CDA00" : null,
                              borderRadius: text === "type" ? 6 : null,
                              fontSize: text === "type" ? 13 : null,
                              padding: text === "type" ? "3px 10px" : null,
                            }}
                          >
                            {item[text]}
                          </Typography>
                        </Link>
                      ) : (
                        <Typography
                          // criar classes
                          style={{
                            color:
                              text === "profit" || text === "type"
                                ? "#2CDA00"
                                : null,
                            border:
                              text === "type" ? "1px solid #2CDA00" : null,
                            borderRadius: text === "type" ? 6 : null,
                            fontSize: text === "type" ? 13 : null,
                            padding: text === "type" ? "3px 10px" : null,
                          }}
                        >
                          {item[text]}
                        </Typography>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </>
        </TableBody>
      </MuiTable>

      <Flex center width="100%" style={{ margin: "25px 0px" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Flex>
    </Flex>
  );
};

export default withStyles((theme) => ({
  typography: {
    fontSize: "0.85rem",
  },

  head: {
    // background: "#FFFFFF",
  },

  table: {
    width: "100%",
    minWidth: 700,
    borderCollapse: "collapse",
    marginTop: 20,
  },
  tableHeader: {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: theme.palette.text.primary,
    "&:last-child": {
      borderRight: "1px solid white",
    },
    borderRight: "1px solid rgba(0, 0, 0, 0.3)",
    // borderBottom: "24px solid white",
    borderRadius: 10,
  },
  tableRow: {
    // background: "#F5F5F5",
    paddingBottom: "10px",
    borderRadius: "10px",
  },

  tableCellRadiusLeft: {
    // borderBottomLeftRadius: "10px",
    // borderTopLeftRadius: "10px",
  },
  tableCellRadiusRight: {
    // borderBottomRightRadius: "10px",
    // borderTopRightRadius: "10px",
  },
  tableBorderBottom: {
    background: "#FFFFFF",
    borderBottom: "1px solid #e0e0e0",
  },
  link: {
    textDecoration: "none",
    width: "100%",
    height: "100%",
  },
}))(Table);
