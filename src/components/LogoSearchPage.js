import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    maxWidth: '1440px',
    '& > *': {
      margin: 'auto'
    },
    // margin: '10px',
    verticalAlign: 'middle',
    alignItems: 'center'
  },
  marginAutoItem: {
    margin: 'auto',
    alignItems: 'center'
  },
  AvatarItem: {
    [theme.breakpoints.down('800')]: {
      display: 'none'
    }
  },
  AvatarItemMobile: {
    [theme.breakpoints.up('800')]: {
      display: 'none'
    }
  },
  title: {
    marginLeft: '18px',
    // width: '116.35px',
    height: '32px',
    borderRadius: '10px',
    textDecoration: 'none',
    border: 'none',
    color: 'white',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    fontSize: '18px',
    // lineHeight: '23px',
    [theme.breakpoints.down('800')]: {
      width: '82px'
    }
  },
  title_: {
    height: '32px',
    borderRadius: '10px',
    textDecoration: 'none',
    border: 'none',
    color: 'white',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    fontSize: '18px',
    // lineHeight: '23px',
    [theme.breakpoints.down('800')]: {
      width: '82px'
    }
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="inline-flex">
        <Typography variant="h6" className={classes.title}>
          <a href="/" className={classes.title_}>
            {' '}
            VIPPU | VIS{' '}
          </a>
        </Typography>
      </Box>
    </div>
  );
}
