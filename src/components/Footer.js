import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0 28px',
    background: '#101F33',
    height: '62px',
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
    [theme.breakpoints.down('550')]: {
      fontSize: '14px',
      lineHeight: '17.7px'
    }
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
    [theme.breakpoints.down('550')]: {
      fontSize: '14px',
      lineHeight: '17.7px'
    },
    '&:last-child': {
      marginRight: 0
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <h3 className={classes.copyright}>Copyright HPV</h3> */}
      <div className={classes.linkList}>
        <a href="/about" className={classes.link}>
          @iCodeLab
        </a>
      </div>
    </div>
  );
}

export default React.memo(Footer)