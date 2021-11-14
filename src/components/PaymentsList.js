import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(2),
  },
  noPaymentsText:{
    color: "#a6a6a6",
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: '600',
  }
}));

const columns = [
  { field: 'date', headerName: 'Date', width: 240 },
  { field: 'description', headerName: 'Description', width: 560 },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 150,
  },
];

const rows = [
  { id: 1, date: 'September 01, 2019', description: 'Invoice for Don Quixote on August 2019', amount: 25 },
  { id: 2, date: 'July 01, 2019', description: 'Invoice for Diane Fowler on June 2019', amount: 42 },
  { id: 3, date: 'May 01, 2019', description: 'Invoice for Percy Jackson on April 2019', amount: 45 },
];

export default function PaymentsList() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="subtitle1" className={ classes.title }> Payments History </Typography>
      <div style={{ height: 400, width: '100%' }}>
        {/* <DataGrid rows={rows} columns={columns} pageSize={4} /> */}
        <Typography className={classes.noPaymentsText}>No payments yet</Typography>
      </div>
    </Paper>
  );
}
