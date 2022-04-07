import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginLeft: '5px'
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  top: {
    color: 'white',
    animationDuration: '550ms',
    left: 0
  },
  circle: {
    strokeLinecap: 'round'
  }
}));

function FacebookCircularProgress({ size }) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle
        }}
        size={size}
        thickness={8}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Spinner(props) {
  const classes = useStyles();
  const { size } = props

  return (
    <div className={classes.root}>
      <FacebookCircularProgress size={size} />
    </div>
  );
}
