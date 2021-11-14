import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Rating from '@material-ui/lab/Rating';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
    '& span':{
        padding: '4px 0',
        margin: '4px 0',
    },
  },
  secondaryText: {
    display: 'inline-block',
    padding: '8px 0 4px',
    color: '#505050',
  },
  rate: {
    textAlign: 'right',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '0 2rem 0.5rem 0',
  },
  listBox:{
    backgroundColor: 'white',
  },
}));

export default function PetServiceProviderRating(props) {
  const classes = useStyles();

  return (
      <Box m={1} p={3} className={classes.listBox}>
        <List component="nav" key={props.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={props.name} src="{props.image.url}" className={classes.small}/>
            </ListItemAvatar>
            <ListItemText
              primary={
                  <React.Fragment>
                      <Typography
                          variant="h5"
                          component="span"
                          color="textPrimary"
                          className={classes.secondaryText}
                          m={0.5}
                      >
                          {props.name}
                      </Typography>                   
                  </React.Fragment>
              }
              secondary={
                  <React.Fragment>
                  <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                  >
                      {props.description}
                  </Typography>
                  <br/>
                  
                  <span className="location">{props.location}</span>
                  </React.Fragment>
              }
              />
            
              <Box component="fieldset" mb={2} borderColor="transparent">
                {props.rating && props.rating !== "No Rating Yet" ?
                  <Rating name="read-only" defaultValue={3} readOnly />:
                  <Typography component="legend">No rating yet</Typography>
                }
              </Box>
            </ListItem>
        </List>
      </Box>
  );
}
