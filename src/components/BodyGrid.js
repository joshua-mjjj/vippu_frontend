import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PetServiceProviderReview from '../components/PetServiceProviderReviewItem';
import PetProviderServices from '../components/PetProviderServices';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '40vh',
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  noreviews:{
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '20rem',
  }
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  let services;
  if(props.services){
    services = props.services
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <PetProviderServices services={services}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9} >
          <Paper className={classes.noreviews}>
            <Typography variant="h6" gutterBottom>
                Reviews
            </Typography>
            {props.reviews && props.reviews !== "No Rating Yet" ?
              <PetServiceProviderReview reviews={props.reviews}/>:
              <Box className={classes.noreviews}>
                <Typography component="legend">No reviews yet</Typography>
              </Box>
            }
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
