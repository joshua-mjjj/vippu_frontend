import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/loading.gif';

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '6px'
  }
}));

function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <img src={logo} alt="" width="100" height="100" />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FacebookCircularProgress />
    </div>
  );
}
