import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 18px',
    marginTop: '800px',
    background: '#383F45',
    height: '52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  copyright: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '25px',
    color: '#000000',
    [theme.breakpoints.down("550")]: {
      fontSize: '14px',
      lineHeight: '17.7px',
    },
  },
  linkList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    marginRight: '19px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '25px',
    color: '#FFFFF6',
    [theme.breakpoints.down("550")]: {
      fontSize: '14px',
      lineHeight: '17.7px',
    },
    "&:last-child": {
      marginRight: 0
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <h3 className={classes.copyright}>Copyright HPV</h3> */}
      <div className={classes.linkList}>
         <a href="/about" className={classes.link}>About</a>
        <a href="/privacy" className={classes.link}>Privacy policy</a>
        <a href="/terms" className={classes.link}>Terms of use</a>
      </div>
    </div>
  );
}
///terms