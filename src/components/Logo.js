import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import logo from '../assets/logo_word.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin:'auto',
    },
    margin: '12rem auto 20px',
    verticalAlign: 'middle',
    alignItems: "center",
    width: '25rem',
  },
  marginAutoItem: {
    margin: 'auto',
    alignItems: 'center',
  },
  titleItem: {
    margin: '2px auto 2px 4px',
    alignItems: 'center',
    fontSize: '3.5rem',
    fontWeight: '700',
    paddingBottom: '0',
    color: 'indigo',
  },
  AvatarItem: {
    margin: '2px 4px 2px auto',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '2px auto 2px',
    }
  },
  Logo: {
    maxWidth: '24rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20rem',
    }
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
     <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.root}>
            <Box display="inline-flex" className={classes.AvatarItem}>
                <img alt="HomePetVet" src={logo} className={classes.Logo} />
            </Box>
          </div>
         </Grid>
    </Grid>
  );
}
