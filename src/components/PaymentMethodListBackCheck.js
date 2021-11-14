import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
 
export default function PaymentMethodListBackCheck (props) {
  const route = "payments"
  const set_route = (e) => {
  	//const check_bool = localStorage.getItem("status");
  	localStorage.setItem("routing_to", route);
  	console.log("done");
  }

  return (
  	<div>
    <Collapse in={true}>
	    <Alert severity="info">
		  <AlertTitle><strong>Info</strong></AlertTitle>
		   Please <Link onClick={set_route} to={{ pathname: `/dashboard`, state: { detail: `${route}` } }}>add</Link> a credit card / payment method.
		</Alert>
    </Collapse>
    </div>
  );
}

