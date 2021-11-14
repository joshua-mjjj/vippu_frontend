import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
    margin: '2rem auto',
    borderRadius: "50px",
    border: "1px solid #dfe1e5",
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontSize: 'medium',
  },
  rating:{
    padding: '0',
    margin: '0',
  },
}));

export default function ReviewPetProvider(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Paper component="form" className={classes.root} width="auto" elevation={0}>
           <InputBase
                type="text"
                className={classes.input} 
                fullWidth
                placeholder="Enter a review"
                  />
            <Box component="fieldset" p={0} mb={2} borderColor="transparent">
                <Rating name="rating" className={classes.rating} defaultValue={3} size="large" readOnly />
            </Box>
          </Paper>
        </Grid>
    </Grid>
  );
}
