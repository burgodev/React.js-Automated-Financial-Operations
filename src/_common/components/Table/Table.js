import React, { useState, useEffect, useCallback } from "react";
import {
  withStyles,
  Table as MuiTable,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";

import { Typography, Flex } from "../";

function Table({ classes, tableHead, onFetch, pagination, onClick }) {
  const [items, setItems] = useState([]);
  const [totalPages] = useState(0);
  const [page, setPage] = useState(1);

  const handleChangePagination = (e, value) => {
    setPage(value);
  };

  const getData = useCallback(
    async (page) => {
      try {
        const data = await onFetch(page);
        setItems(data);
      } catch (e) {
      } finally {
      }
    },
    [onFetch]
  );

  useEffect(() => {
    getData(page);
  }, [onFetch, getData, page]);

  return (
    <>
      <MuiTable className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableHeadRow}>
            {tableHead.map((tableHead) => (
              <TableCell
                align="center"
                key={tableHead.id}
                className={classes.tableHeader}
              >
                <Typography fontSize="0.95rem" fontWeight={600}>
                  {tableHead.text}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.id}
              className={classes.tableRow}
              onClick={onClick}
              style={{
                cursor: typeof onClick === "undefined" ? "auto" : "pointer",
              }}
            >
              {Object.keys(item).map(
                (key) =>
                  key !== "id" && (
                    <TableCell className={classes.tableBorderBottom} key={key}>
                      <Typography fontSize="0.85rem">{item[key]}</Typography>
                    </TableCell>
                  )
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      {pagination && (
        <Flex center className={classes.flexPagination}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePagination}
            size="large"
          />
        </Flex>
      )}
    </>
  );
}

export default withStyles((theme) => ({
  table: {
    width: "100%",
    minWidth: 700,
    borderCollapse: "collapse",
    marginTop: "30px",
  },
  tableHeader: {
    fontSize: "1.05rem",
    fontWeight: 600,
    color: theme.colors.text,
    "&:nth-child(1)": {
      borderBottomLeftRadius: "15px",
      borderTopLeftRadius: "10px",
    },
    "&:last-child": {
      borderBottomRightRadius: "15px",
      borderTopRightRadius: "10px",
    },
    borderRight: "0.8px solid #b6b6b66c",
    borderBottom: "8px solid #E5E5E5",
  },
  tableRow: {
    background: "white",
    paddingBottom: "10px",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.025)",
    },
  },
  tableCellRadiusLeft: {
    borderBottomLeftRadius: "10px",
    borderTopLeftRadius: "10px",
  },
  tableCellRadiusRight: {
    borderBottomRightRadius: "10px",
    borderTopRightRadius: "10px",
  },
  tableBorderBottom: {
    borderBottom: "4px solid #E5E5E5",
    textAlign: "center",
  },
  tableHeadRow: {
    color: "white",
  },
  flexPagination: {
    margin: "25px 0px",
  },
}))(Table);

Table.propTypes = {
  classes: PropTypes.object,
  tableHead: PropTypes.array.isRequired, // cabeçalho da tabela
  onFetch: PropTypes.func.isRequired, // função que alimenta a tabela
  pagination: PropTypes.bool, // caracteriza se tabela deve ter paginação ou não
  onClick: PropTypes.func, // função de onClick para row
};
